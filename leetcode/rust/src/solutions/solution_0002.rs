/*
 * @lc app=leetcode.cn id=2 lang=rust
 *
 * [2] 两数相加
 *
 * https://leetcode.cn/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (43.20%)
 * Likes:    11061
 * Dislikes: 0
 * Total Accepted:    2.3M
 * Total Submissions: 5.1M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 *
 *
 * 示例 2：
 *
 *
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 *
 *
 * 示例 3：
 *
 *
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 <= Node.val <= 9
 * 题目数据保证列表表示的数字不含前导零
 *
 *
 */

use super::Solution;
use crate::data_structure::linked_list::ListNode;
// @lc code=start
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let (mut n1, mut n2) = (l1, l2);
        // 最终结果的首节点
        let mut res = Some(Box::new(ListNode::new(0)));
        // 循环的当前节点
        let mut current = &mut res;
        // 进位之后的值
        let mut carry = 0;
        loop {
            if n1.is_none() && n2.is_none() {
                if carry == 0 {
                    break;
                }
                current.as_mut().unwrap().next = Some(Box::new(ListNode::new(carry)));
            }

            let n1_val = match n1 {
                Some(node) => {
                    n1 = node.next;
                    node.val
                }
                None => 0,
            };

            let n2_val = match n2 {
                Some(node) => {
                    n2 = node.next;
                    node.val
                }
                None => 0,
            };

            let mut sum = n1_val + n2_val + carry;
            if sum >= 10 {
                sum -= 10;
                carry = 1;
            } else {
                carry = 0
            }
            current.as_mut().unwrap().next = Some(Box::new(ListNode::new(sum)));
            current = &mut current.as_mut().unwrap().next;
        }

        res.unwrap().next
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;
    use crate::linked_list;

    #[test]
    fn test() {
        let l1 = linked_list!(2, 4, 3);
        let l2 = linked_list!(5, 6, 4);
        let l3 = linked_list!(7, 0, 8);
        assert_eq!(Solution::add_two_numbers(l1, l2), l3);

        let l1 = linked_list!(0);
        let l2 = linked_list!(0);
        let l3 = linked_list!(0);
        assert_eq!(Solution::add_two_numbers(l1, l2), l3);

        let l1 = linked_list!(9, 9, 9, 9, 9, 9, 9);
        let l2 = linked_list!(9, 9, 9, 9);
        let l3 = linked_list!(8, 9, 9, 9, 0, 0, 0, 1);
        assert_eq!(Solution::add_two_numbers(l1, l2), l3);
    }
}

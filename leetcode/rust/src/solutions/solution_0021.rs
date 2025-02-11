use super::Solution;
use crate::data_structure::linked_list::ListNode;
impl Solution {
    pub fn merge_two_lists(
        mut list1: Option<Box<ListNode>>,
        mut list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut dummy = ListNode::new(-1);
        let mut tail = &mut dummy;

        while list1.is_some() && list2.is_some() {
            // 这里注意到 unwrap 会消费所有权
            // 所以要先调用 as_ref 方法创建一个引用
            // 再调用 unwrap 消费的就是对引用的所有权
            // 否则下面的 list1 和 list2 就变成无效变量了
            let val1 = list1.as_ref().unwrap().val;
            let val2 = list2.as_ref().unwrap().val;
            if val1 < val2 {
                // 第一个节点的所有权转移给了 tail.next
                tail.next = list1;
                // 这里把 tail 指向它的下一个节点
                // 只需要注意一下 tail 的类型是 &mut ListNode
                tail = tail.next.as_mut().unwrap();
                // 这里需要用 take 将第二个节点的所有权给到 list1
                // 否则在下一个循环里 list1 就变成无效变量了
                list1 = tail.next.take();
            } else {
                tail.next = list2;
                tail = tail.next.as_mut().unwrap();
                list2 = tail.next.take();
            }
        }

        tail.next = if list1.is_none() { list2 } else { list1 };
        dummy.next
    }
}

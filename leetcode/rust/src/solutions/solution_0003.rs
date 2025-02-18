/*
 * @lc app=leetcode.cn id=3 lang=rust
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.49%)
 * Likes:    9967
 * Dislikes: 0
 * Total Accepted:    2.7M
 * Total Submissions: 6.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

use super::Solution;
// @lc code=start
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        use std::collections::HashSet;
        let mut i = 0;
        let mut j = 0;
        let mut max = 0;
        let chars: Vec<char> = s.as_str().chars().collect();
        let mut set: HashSet<char> = HashSet::new();
        // j往后走到s的最后一位为止
        while let Some(c) = chars.get(j) {
            while set.contains(c) {
                // 需要从set中去掉的char
                set.remove(chars.get(i).unwrap());
                i += 1;
            }
            set.insert(*c);
            max = std::cmp::max(set.len(), max);
            j += 1;
        }

        max as i32
    }
}
// @lc code=end

#[test]
fn test() {
    assert_eq!(
        Solution::length_of_longest_substring("abcabcbb".to_string()),
        3
    );
    assert_eq!(
        Solution::length_of_longest_substring("bbbbb".to_string()),
        1
    );
    assert_eq!(
        Solution::length_of_longest_substring("pwwkew".to_string()),
        3
    );

    assert_eq!(Solution::length_of_longest_substring("".to_string()), 0);
}

#
# @lc app=leetcode.cn id=3 lang=python3
# @lcpr version=30305
#
# [3] 无重复字符的最长子串
#


# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        end = 0
        max_len = 0
        chars = set({})
        while end < len(s):
            if s[end] in chars:
                while start < end:
                    if s[start] == s[end]:
                        start += 1
                        break
                    chars.remove(s[start])
                    start += 1
            else:
                chars.add(s[end])
                max_len = max(max_len, len(chars))
            end += 1
        return max_len


# @lc code=end


#
# @lcpr case=start
# "abcabcbb"\n
# @lcpr case=end

# @lcpr case=start
# "bbbbb"\n
# @lcpr case=end

# @lcpr case=start
# "pwwkew"\n
# @lcpr case=end

#

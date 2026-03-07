#
# @lc app=leetcode.cn id=5 lang=python3
# @lcpr version=30400
#
# [5] 最长回文子串
#


# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        l = len(s)
        if l == 1:
            return s
        if l == 2:
            return s[0] if s[0] != s[1] else s
        dp = [[False] * l for _ in range(l)]
        max_l = 1
        res = (0, 1)
        for i in range(l):
            dp[i][i] = True
        for i in range(l - 1):
            if s[i + 1] == s[i]:
                max_l = 2
                res = (i, i + 2)
                dp[i][i + 1] = s[i + 1] == s[i]

        for offset in range(2, l):
            for i in range(l - offset):
                dp[i][i + offset] = dp[i + 1][i + offset - 1] and s[i + offset] == s[i]
                if dp[i][i + offset] and (offset + 1) > max_l:
                    max_l = offset + 1
                    res = (i, i + offset + 1)

        return s[res[0] : res[1]]


# @lc code=end

solution = Solution()
res = solution.longestPalindrome("cbbd")
print(res)
#
# @lcpr case=start
# "babad"\n
# @lcpr case=end

# @lcpr case=start
# "cbbd"\n
# @lcpr case=end

#

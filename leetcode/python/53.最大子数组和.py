#
# @lc app=leetcode.cn id=53 lang=python3
# @lcpr version=30400
#
# [53] 最大子数组和
#
from typing import List


# res[i,j] =
# max = max(res[i,j-1], sum[i,j-1] + nums[j], nums[j])
# 1. max = nums[j]
#     sum[i,j] = nums[j]
# 2. max = sum[i,j-1] + nums[j]
# 3. max = res[i,j-1]


# @lc code=start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[i] = max(nums[i], nums[i] + nums[i - 1])
        return max(nums)


# @lc code=end


#
# @lcpr case=start
# [-2,1,-3,4,-1,2,1,-5,4]\n
# @lcpr case=end

# @lcpr case=start
# [1]\n
# @lcpr case=end

# @lcpr case=start
# [5,4,-1,7,8]\n
# @lcpr case=end

#

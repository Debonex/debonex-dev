#
# @lc app=leetcode.cn id=215 lang=python3
# @lcpr version=30400
#
# [215] 数组中的第K个最大元素
#
# 分治算法解决
from typing import List


# @lc code=start
class Solution:
    def partion(self, nums: List[int], left, right):
        pivot_idx = (left + right) // 2
        pivot = nums[pivot_idx]
        nums[pivot_idx], nums[left] = nums[left], nums[pivot_idx]

        i = left + 1
        j = right
        while i <= j:
            while i <= j and nums[i] < pivot:
                i += 1

            while i <= j and nums[j] > pivot:
                j -= 1

            if i >= j:
                break

            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1

        nums[left], nums[j] = nums[j], nums[left]
        return j

    def findKthLargest(self, nums: List[int], k: int) -> int:
        n = len(nums)
        target_idx = n - k
        left = 0
        right = n - 1
        while True:
            i = self.partion(nums, left, right)
            if i == target_idx:
                return nums[i]
            elif i > target_idx:
                right = i - 1
            else:
                left = i + 1


# @lc code=end


#
# @lcpr case=start
# [3,2,1,5,6,4]\n2\n
# @lcpr case=end

# @lcpr case=start
# [3,2,3,1,2,4,5,5,6]\n4\n
# @lcpr case=end

#

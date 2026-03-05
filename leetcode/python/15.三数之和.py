#
# @lc app=leetcode.cn id=15 lang=python3
# @lcpr version=30400
#
# [15] 三数之和
#


# @lc code=start
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        nums.sort()
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            target = -nums[i]
            l = i + 1
            r = len(nums) - 1
            while l < r:
                twosum = nums[l] + nums[r]
                if twosum == target:
                    result.append([nums[i], nums[l], nums[r]])
                    while True:
                        l += 1
                        if l >= r or nums[l] != nums[l - 1]:
                            break
                    while True:
                        r -= 1
                        if l >= r or nums[r] != nums[r + 1]:
                            break
                elif twosum > target:
                    while True:
                        r -= 1
                        if l >= r or nums[r] != nums[r + 1]:
                            break
                else:
                    while True:
                        l += 1
                        if l >= r or nums[l] != nums[l - 1]:
                            break

        return result


# @lc code=end

solution = Solution()
# print(solution.threeSum([0, 0, 0, 0]))
print(solution.threeSum([-1, 0, 1, 2, -1, -4]))

#
# @lcpr case=start
# [-1,0,1,2,-1,-4]\n
# @lcpr case=end

# @lcpr case=start
# [0,1,1]\n
# @lcpr case=end

# @lcpr case=start
# [0,0,0]\n
# @lcpr case=end

#

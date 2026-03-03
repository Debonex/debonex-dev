#
# @lc app=leetcode.cn id=215 lang=python3
# @lcpr version=30400
#
# [215] 数组中的第K个最大元素
#
from typing import List
import heapq

# @lc code=start
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pq = []
        for e in nums:
            heapq.heappush(pq, e)
            if len(pq) > k:
                heapq.heappop(pq)
        return pq[0]
        
# @lc code=end



#
# @lcpr case=start
# [3,2,1,5,6,4]\n2\n
# @lcpr case=end

# @lcpr case=start
# [3,2,3,1,2,4,5,5,6]\n4\n
# @lcpr case=end

#


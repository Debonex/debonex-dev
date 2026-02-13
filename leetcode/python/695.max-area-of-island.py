from typing import List
# @lcpr-before-debug-begin
# @lcpr-before-debug-end

#
# @lc app=leetcode.cn id=695 lang=python3
# @lcpr version=30204
#
# [695] 岛屿的最大面积
#


# @lcpr-template-start


# @lcpr-template-end
# @lc code=start
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:

        searched_grids = set()
        max_area = 0
        max_i = len(grid) - 1
        max_j = len(grid[0]) - 1

        def dfs(i: int, j: int):
            # reach bound
            if (i, j) in searched_grids or i < 0 or j < 0 or i > max_i or j > max_j:
                searched_grids.add((i, j))
                return 0
            searched_grids.add((i, j))
            if grid[i][j] == 1:
                return 1 + dfs(i - 1, j) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i, j + 1)
            else:
                return 0

        for i in range(0, max_i + 1):
            for j in range(0, max_j + 1):
                if grid[i][j] == 1 and (i, j) not in searched_grids:
                    max_area = max(max_area, dfs(i, j))

        return max_area
# @lc code=end


#
# @lcpr case=start
# [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\n
# @lcpr case=end

# @lcpr case=start
# [[0,0,0,0,0,0,0,0]]\n
# @lcpr case=end

#

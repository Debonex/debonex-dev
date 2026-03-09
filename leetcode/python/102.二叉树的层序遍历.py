#
# @lc app=leetcode.cn id=102 lang=python3
# @lcpr version=30400
#
# [102] 二叉树的层序遍历
#
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        nodes = [root]
        next_nodes = []
        result = []
        while len(nodes) > 0:
            layer_result = []
            while len(nodes) > 0:
                node = nodes.pop(0)
                if node is None:
                    continue
                layer_result.append(node.val)
                if node.left:
                    next_nodes.append(node.left)
                if node.right:
                    next_nodes.append(node.right)
            nodes = next_nodes
            next_nodes = []
            if len(layer_result) > 0:
                result.append(layer_result)

        return result


# @lc code=end


#
# @lcpr case=start
# [3,9,20,null,null,15,7]\n
# @lcpr case=end

# @lcpr case=start
# [1]\n
# @lcpr case=end

# @lcpr case=start
# []\n
# @lcpr case=end

#

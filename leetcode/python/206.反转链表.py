#
# @lc app=leetcode.cn id=206 lang=python3
# @lcpr version=30400
#
# [206] 反转链表
#
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        prev_node = None
        cur_node = head
        next_node = cur_node
        while True:
            next_node = cur_node.next
            cur_node.next = prev_node
            if next_node is None:
                return cur_node
            prev_node = cur_node
            cur_node = next_node


# @lc code=end

list = [1, 2, 3, 4, 5]
head = ListNode(list[0])
cur_node = head
for i in range(1, len(list)):
    cur_node.next = ListNode(list[i])
    cur_node = cur_node.next
solution = Solution()
result = solution.reverseList(head)
while result is not None:
    print(result.val)
    result = result.next

#
# @lcpr case=start
# [1,2,3,4,5]\n
# @lcpr case=end

# @lcpr case=start
# [1,2]\n
# @lcpr case=end

# @lcpr case=start
# []\n
# @lcpr case=end

#

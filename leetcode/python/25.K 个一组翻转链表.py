#
# @lc app=leetcode.cn id=25 lang=python3
# @lcpr version=30400
#
# [25] K 个一组翻转链表
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
    def reverse(
        self,
        prev: Optional[ListNode],
        head: ListNode,
        tail: ListNode,
    ):
        if prev is not None:
            prev.next = tail
        prev_node = prev
        current_node = head
        tail_next = tail.next
        while True:
            next_node = current_node.next
            current_node.next = prev_node
            if next_node == tail:
                next_node.next = current_node
                break
            prev_node = current_node
            current_node = next_node

        head.next = tail_next

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k == 1:
            return head

        dummy = ListNode(next=head)

        ptr = head
        cnt = 1
        ptr_prev = dummy
        start_prev = None
        start, end = None, None
        while ptr:
            ptr_next = ptr.next
            if cnt % k == 1:
                start_prev = ptr_prev
                start = ptr
            if cnt % k == 0:
                end = ptr
                ptr_prev = start
                self.reverse(start_prev, start, end)
            else:
                ptr_prev = ptr

            ptr = ptr_next
            cnt += 1

        return dummy.next


# @lc code=end

# list = [1,2,3,4,5]
# solution = Solution()
# head = ListNode(1)
# ptr = head
# for i in range(1, len(list)):
#     ptr.next = ListNode(val=list[i], next=None)
#     ptr = ptr.next
# res = solution.reverseKGroup(head, 2)
# while res:
#     print(res.val)
#     res = res.next

#
# @lcpr case=start
# [1,2,3,4,5]\n2\n
# @lcpr case=end

# @lcpr case=start
# [1,2,3,4,5]\n3\n
# @lcpr case=end

#

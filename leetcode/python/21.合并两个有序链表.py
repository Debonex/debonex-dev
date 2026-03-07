#
# @lc app=leetcode.cn id=21 lang=python3
# @lcpr version=30400
#
# [21] 合并两个有序链表
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
    def mergeTwoLists(
        self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:
        dummy = ListNode()
        cur = dummy
        l1_ptr, l2_ptr = list1, list2
        while l1_ptr or l2_ptr:
            if l1_ptr is None:
                cur.next = l2_ptr
                break
            if l2_ptr is None:
                cur.next = l1_ptr
                break

            if l1_ptr.val < l2_ptr.val:
                cur.next = l1_ptr
                l1_ptr = l1_ptr.next
            else:
                cur.next = l2_ptr
                l2_ptr = l2_ptr.next
            cur = cur.next
        return dummy.next


# @lc code=end


#
# @lcpr case=start
# [1,2,4]\n[1,3,4]\n
# @lcpr case=end

# @lcpr case=start
# []\n[]\n
# @lcpr case=end

# @lcpr case=start
# []\n[0]\n
# @lcpr case=end

#

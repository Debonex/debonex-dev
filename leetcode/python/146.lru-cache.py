#
# @lc app=leetcode.cn id=146 lang=python3
# @lcpr version=30204
#
# [146] LRU 缓存
#


# @lcpr-template-start

# @lcpr-template-end
# @lc code=start
from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key, False)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        self.cache[key] = value
        self.cache.move_to_end(key, False)
        if len(self.cache) > self.capacity:
            self.cache.popitem()


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
# @lc code=end

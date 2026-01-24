/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {

    let s = head;
    let f = head;

    while (f && f.next) {
        s = s.next;
        f = f.next.next;
    }

    return s;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let sentinel = new ListNode();
    sentinel.next = head;

    let lenght = 0;
    while (head) {
        head = head.next;
        lenght++;
    }

    let prePos = lenght - n;
    let pre = sentinel;
    for (let i = 0; i < prePos; i++) {
        pre = pre.next
    }
    pre.next = pre.next.next;

    return sentinel.next;

};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let storeList = new Set();

    let curr = headA;

    while (curr) {
        storeList.add(curr)
        curr = curr.next
    }

    let curr2 = headB;
    while (curr2) {
        if (storeList.has(curr2)) {
            return curr2;
        }

        curr2 = curr2.next;
    }


    return null;

};
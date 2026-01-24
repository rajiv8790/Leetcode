/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
  var isPalindrome = function (head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let pre = null;
    let curr = slow;

    while (curr) {
        let temp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = temp;
    }

    let firstHead = head;
    let secondHead = pre;

    while (secondHead) {
        if (firstHead.val !== secondHead.val) {
            return false;
        }

        firstHead = firstHead.next;
        secondHead = secondHead.next;

    }

    return true;
};




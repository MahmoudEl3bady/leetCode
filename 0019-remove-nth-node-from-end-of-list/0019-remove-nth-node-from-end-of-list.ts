/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || !head.next) {
        return null;
    }

    let len = 0;
    let tmp = head;
    while (tmp) {
        tmp = tmp.next;
        len++;
    }
    let prev = null;
    let curr = head;
    let pos = len - n;
    if(pos===0){
        return curr.next;
    }
    while (pos > 0) {
        prev = curr;
        curr = curr.next;
        console.log(curr.val);
        pos--;
    }
    console.log(prev, curr, head);
    prev.next = curr.next;
    return head;
};



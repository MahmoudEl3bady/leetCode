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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let tmp = new ListNode(0, head);
    let prev = tmp;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    let curr = prev.next;
    for (let i = 0;i<right-left;i++) {
        let next = curr.next;
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }
    return tmp.next;

};
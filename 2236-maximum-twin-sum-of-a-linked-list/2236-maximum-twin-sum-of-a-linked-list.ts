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

function pairSum(head: ListNode | null): number {
    let fast = head;
    let slow = head;

    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;   
        let temp = slow.next;    
        slow.next = prev;       
        prev = slow;             
        slow = temp;             
    }

    let res = 0;

    while (slow) {
        res = Math.max(res, prev.val + slow.val);

        slow = slow.next;
        prev = prev.next;
    }

    return res;
}
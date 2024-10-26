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

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
    let visited = new Map();
    let tmp = head;
    while (tmp) {
        console.log(tmp.val)
        if (visited.get(tmp) === true) {
            return true;
        }
        visited.set(tmp,true);
        tmp = tmp.next;
    }
    return false;
};
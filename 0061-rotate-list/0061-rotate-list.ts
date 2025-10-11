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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (k === 0) return head;
    if(!head) return null;
    if(!head.next) return head;

    let tmp = head;
    let len = 0;
    while(tmp){
        tmp = tmp.next;
        len++;
    }

    for (let i = 0; i < k % len; i++) {
        head = rotate(head);
    }
    return head;
};

function rotate(listNode: ListNode | null) {
    let tmp = listNode;
    let dummy = listNode;
    let list = dummy;
    while (tmp.next.next) {
        tmp = tmp.next;
        dummy = dummy.next;
    }
    tmp = tmp.next;
    dummy.next = null;
    let cur = list;
    let res = tmp;
    while (cur) {
        tmp.next = cur;
        tmp = tmp.next;
        cur = cur.next;

    }
    return res;
}

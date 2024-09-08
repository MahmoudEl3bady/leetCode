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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let result:Array<ListNode> = []; 
    let len = 0;
    let tmp = head;
    while(tmp){
        len++;
        tmp = tmp.next;
    }
    let splitSize = Math.floor(len/k);
    let remSize = len % k;
    let current = head;
    for(let i = 0;i<k;i++){
        let currSize  = splitSize;
        let chunk = new ListNode();
        let tail = chunk;
        if(remSize >0){
            currSize++;
            remSize--;
        }
        for(let j = 0;j<currSize;j++){
            if(!current) break;
            let newNode = new ListNode(current.val);
            tail.next = newNode;
            tail = tail.next;
            current = current.next;
        }
        result[i] = chunk.next;
    }
    return result;
};
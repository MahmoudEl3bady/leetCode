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
const oddEvenList = function(head) {
    if(!head || !head.next) return head; 
let prev = head;
    let curr = head.next;
    while(prev.next && prev.next.next){
        let tmp = prev.next;
        prev.next = prev.next.next;
        prev = prev.next;
        tmp.next = prev.next;
    }
    prev.next = curr; 
    
    console.log(prev,curr,head);

    return head;
};
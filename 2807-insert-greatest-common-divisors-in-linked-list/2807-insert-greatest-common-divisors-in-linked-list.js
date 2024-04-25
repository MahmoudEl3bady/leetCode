/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const insertGreatestCommonDivisors = function(head) {
    let t1 = null;
    let t2 = null;
    let maxDiv;
    
    if (head !== null) {
        t1 = head;
    }
    if (head !== null && head.next !== null) {
        t2 = head.next;
    }
    
    while (t1 !== null && t2 !== null) {
        const maxNodeVal = Math.max(t1.val, t2.val);
        
        for (let i = maxNodeVal; i >= 1; i--) {
            if (t1.val % i === 0 && t2.val % i === 0) {
                maxDiv = i;
                break;
            }
        }
        
        let newNode = new ListNode(maxDiv);
        newNode.next = t2;
        t1.next = newNode;
        
        t1 = t1.next.next; 
        if (t1 !== null) {
            t2 = t1.next;
        
        }
    }
    
    return head;
};

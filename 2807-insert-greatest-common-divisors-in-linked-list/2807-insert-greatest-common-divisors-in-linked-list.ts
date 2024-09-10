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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let prev = head;
    let curr = head.next;
    while(prev && curr){
    const gcd = greatestCommonDiv(prev.val,curr.val);
    let newNode = new ListNode(gcd);
        prev.next = newNode;
        newNode.next = curr;
        prev = prev.next.next;
        curr = curr.next;
    }
    return head;
};

function greatestCommonDiv(num1:number,num2:number):number {
    let commonDivs:number[] = [];
    for(let i = 1;i<=Math.max(num1,num2);i++){
        if(num1%i===0 && num2%i===0){
            commonDivs.push(i);
        }
    }
    return commonDivs.at(-1);
}
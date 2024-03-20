/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = function(list1, a, b, list2) {
    let start = list1;
    let end = list1;
    let count = 0;
    let count2 = 0;

    while(start.next && count <a-1){
       start =  start.next;
       count++;
    }
      while(end.next && count2 <=b){
       end =  end.next;
       count2++;
    }


let l2End = list2;
while(l2End.next){
    l2End=l2End.next;
}
start.next = list2;
l2End.next = end;
return (list1);



    
};
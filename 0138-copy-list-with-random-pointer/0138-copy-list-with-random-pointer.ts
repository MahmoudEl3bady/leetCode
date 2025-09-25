/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    let map = new Map();
    let curr = head;

    while (curr) {
        map.set(curr, new _Node(curr.val))
        curr = curr.next;
    }
    curr = head;
    while (curr) {
        const cp = map.get(curr);
        cp.next = map.get(curr.next) || null;
        cp.random = map.get(curr.random) || null;
        curr = curr.next;
    }

    return map.get(head);
}
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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    if(!root) return false;
    return dfs(root,head) || isSubPath(head,root.left) || isSubPath(head,root.right);
};
function dfs(root:TreeNode | null, head:ListNode |null ):boolean{
    if(!head) return true;
    if(!root) return false;
    if(root.val === head.val){
        return dfs(root.left,head.next) || dfs(root.right , head.next)
    }
    return false
}
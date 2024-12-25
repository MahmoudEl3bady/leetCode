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

function largestValues(root: TreeNode | null): number[] {   
    if(!root) return [];
    let queue:TreeNode[] = [root];
    let res: number[] = [];
    while (queue.length > 0) {
        let currentLength = queue.length;
        let currMax :number= -Infinity;
        for (let i = 0; i < currentLength; i++) {
            let node = queue.shift();
            currMax = Math.max(currMax,node.val);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
            res.push(currMax);
    }
    return res;
};
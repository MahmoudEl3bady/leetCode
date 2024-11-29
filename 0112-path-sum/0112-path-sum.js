/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const  hasPathSum = function (root, targetSum) {
    let stack = [];
    if(root) stack.push([root,0]);
    while(stack.length>0){
        let [node,currSum] = stack.pop();
        currSum+=node.val;

        if(!node.left && !node.right && currSum === targetSum){
            return true;
        }

        if(node.left) stack.push([node.left,currSum]);
        if(node.right) stack.push([node.right,currSum]);
    }
    return false;
};
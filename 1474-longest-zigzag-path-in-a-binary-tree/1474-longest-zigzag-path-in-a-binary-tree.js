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
 * @return {number}
 */
const longestZigZag = function(root) {
    let maxLength = 0;
    let stack = [];
    stack.push([root,1,0]);
    stack.push([root,0,0]);

    while(stack.length>0){
        let [node,goLeft,length] = stack.pop();
        maxLength = Math.max(maxLength,length);

        if(goLeft){
            if(node.left) stack.push([node.left,0,length+1]);
            if(node.right) stack.push([node.right,1,1]);
        }else{
            if(node.right) stack.push([node.right,1,length+1]);
            if(node.left) stack.push([node.left,0,1]);

        }
    }

    return maxLength;

};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
        DFS => traversal: 3,5,6,2,7,4,1,9,8 

 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (root,leaves)=>{
        if(root){
            if(!root.left && !root.right){
                leaves.push(root.val);
            }
        
        dfs(root.left,leaves);
        dfs(root.right,leaves);
        }
    }

    let l1 = [], l2 = [];
    dfs(root1,l1);
    dfs(root2,l2);

    for(let i = 0;i<Math.max(l1.length,l2.length);i++){
        if(l1[i]!==l2[i]){
            return false;
        }
    }
    return true;
};
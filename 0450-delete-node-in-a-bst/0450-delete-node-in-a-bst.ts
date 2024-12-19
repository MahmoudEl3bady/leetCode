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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
        return null;
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if(!root.left){
            return root.right;
        }else if (!root.right){
            return root.left;
        }

        let curr = root.right;
        while(curr.left){
            curr = curr.left;
        }
        root.val = curr.val;
        root.right = deleteNode(root.right,root.val);
    }
    return root;
};

/**
    node.val == key
        del node
    key > node.val
        node = node.right
    key < node.val
        node = node.left
    
 */
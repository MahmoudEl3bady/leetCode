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
var goodNodes = function (root) {
    const dfs = (root) => {
        let visited = new Set();
        let stack = [[root, root.val]];
        let res = 0;
        while (stack.length > 0) {
            let currNode = stack.pop();
            let [node, max] = [currNode[0],currNode[1]];
            if (node.val >= max) {
                res++;
                max = node.val;
            }
            if (!visited.has(node)) {
                visited.add(node);
                if (node.left) stack.push([node.left,max]);
                if (node.right) stack.push([node.right,max]);
            }
        }
        return res;
    };
    return dfs(root);
};
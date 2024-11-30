const pathSum = function (root, targetSum) {
    if (!root) return []; 
    let stack = [];
    let res = [];
    stack.push([root, [], 0]);

    while (stack.length > 0) {
        let [node, path, currentSum] = stack.pop();

        let newPath = [...path, node.val];
        let newSum = currentSum + node.val;

        if (!node.left && !node.right && newSum === targetSum) {
            res.push(newPath);
        }

        if (node.right) stack.push([node.right, newPath, newSum]);
        if (node.left) stack.push([node.left, newPath, newSum]);
    }

    return res;
};

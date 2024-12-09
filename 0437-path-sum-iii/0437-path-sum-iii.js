const pathSum = (root, targetSum) => {
    if (root === null) return 0;
    let count = 0;
    const st = [root];
    const path = [];
    while (st.length !== 0) {
        const node = st.pop();
        if (node !== null) {
            path.push(node.val);
            st.push(null);
            if (node.right !== null) st.push(node.right);
            if (node.left !== null) st.push(node.left);
            for (let i = path.length - 1, sum = 0; i >= 0; --i) {
                sum += path[i];
                if(sum === targetSum) ++count;
            }
        } else {
            path.pop();
        }
    }
    return count;
};
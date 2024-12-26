function combinationSum(candinates: number[], target: number): number[][] {
    let res: number[][] = [];

    const dfs = (idx, curr, total) => {
        if (total == target) {
            res.push([...curr]);
            console.log(res,curr)
            return;
        }
        if (idx >= candinates.length || total > target) return;
        curr.push(candinates[idx]);
        dfs(idx, curr, total + candinates[idx]);
        curr.pop();
        dfs(idx + 1, curr, total)
    }

    dfs(0, [], 0);
    return res;
};
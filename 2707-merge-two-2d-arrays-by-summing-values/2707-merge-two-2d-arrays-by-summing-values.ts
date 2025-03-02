function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const merged = [...nums1, ...nums2];
    let map = new Map<number, number>();
    for (const [id, val] of merged) {
        if (map.has(id)) {
            map.set(id, map.get(id) + val);
        } else {
            map.set(id, val);
        }
    }
    let res = Array.from(map);
    return res.sort((a, b) => a[0] - b[0]);
}
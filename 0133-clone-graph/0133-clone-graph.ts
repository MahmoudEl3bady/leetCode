/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
        return null;
    }
    const nodes = new Map<number, _Node>();
    function dfs(originalNode: _Node) {
        if(nodes.has(originalNode.val)){
            return nodes.get(originalNode.val);
        }
        const node :_Node= new _Node(originalNode.val);
        nodes.set(originalNode.val,node);

        for(const ni of originalNode.neighbors){
            node.neighbors.push(dfs(ni));
        }
        return node;
    }
return dfs(node);

};
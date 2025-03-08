function minimumRecolors(blocks: string, k: number): number {
    let window = '';
    let res: number[] = [];
    for (let i = 0; i < k; i++) {
        window += blocks[i];
    }
    for (let i = k; i <= blocks.length; i++) {
        res.push(k - numberOfBalckBlocks(window));
        window = window.substring(1) + blocks[i];
    }
    return Math.min(...res);
};

const numberOfBalckBlocks = (block: string) => {
    let count = 0;
    for (const ch of block) {
        if (ch == 'B') {
            count++;
        }
    }
    return count;
}   
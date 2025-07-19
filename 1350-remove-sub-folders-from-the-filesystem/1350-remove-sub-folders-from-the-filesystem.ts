function removeSubfolders(folder: string[]): string[] {
    folder.sort();
    const result: string[] = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        const prevFolder = result.at(-1);
        
        if (!(folder[i].startsWith(prevFolder) && folder[i][prevFolder.length] === '/')) {
            result.push(folder[i]);
        }
    }
    
    return result;
}

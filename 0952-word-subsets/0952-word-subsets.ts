function wordSubsets(words1: string[], words2: string[]): string[] {
    // Step 1: Create a universal character count for words2
    const universalCount = new Map<string, number>();

    for (const w2 of words2) {
        const currentCount = new Map<string, number>();
        for (const ch of w2) {
            currentCount.set(ch, (currentCount.get(ch) || 0) + 1);
        }
        for (const [ch, count] of currentCount.entries()) {
            universalCount.set(ch, Math.max(universalCount.get(ch) || 0, count));
        }
    }

    // Step 2: Check each word in words1 against the universal count
    const result: string[] = [];
    for (const w1 of words1) {
        const w1Count = new Map<string, number>();
        for (const ch of w1) {
            w1Count.set(ch, (w1Count.get(ch) || 0) + 1);
        }

        let isUniversal = true;
        for (const [ch, count] of universalCount.entries()) {
            if ((w1Count.get(ch) || 0) < count) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) {
            result.push(w1);
        }
    }

    return result;
}
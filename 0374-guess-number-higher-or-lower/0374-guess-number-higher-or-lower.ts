/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let l = 1, r = n;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (guess(mid) === 0) return mid;
        else if (guess(mid) === -1) r = mid;
        else l = mid + 1;
    }
    return -1;
};
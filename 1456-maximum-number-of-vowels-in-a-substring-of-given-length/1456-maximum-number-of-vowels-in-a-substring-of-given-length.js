function maxVowels(s, k) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowelsChars = 0;
  let currentVowels = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
  }
  console.log("Curr", currentVowels);
  maxVowelsChars = currentVowels;
 for (let i = k; i < s.length; i++) {
   if (vowels.has(s[i - k])) {
     currentVowels--;
   }
   if (vowels.has(s[i])) {
     currentVowels++;
   }
   maxVowelsChars = Math.max(maxVowelsChars, currentVowels);
 }

  return maxVowelsChars;
}

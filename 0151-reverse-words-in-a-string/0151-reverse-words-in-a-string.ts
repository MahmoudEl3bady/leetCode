function reverseWords(s: string): string {
  let words = s.split(' ');
  words = words.filter(w=>w);
   return words.reverse().join(' ').trim();
}
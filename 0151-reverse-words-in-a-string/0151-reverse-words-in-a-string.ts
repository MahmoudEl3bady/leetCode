function reverseWords(s: string): string {
  const words = s.trim().split(' ');
    let l ;
    l = words.filter(Boolean);
    return l.reverse().join(' ');
};
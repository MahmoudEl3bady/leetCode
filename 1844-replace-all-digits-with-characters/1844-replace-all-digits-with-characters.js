/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
    let alph = Array.from("abcdefghijklmnopqrstuvwxyz");
    for(let i =1;i<s.length ;i+=2){
        let num = s[i];
      s=s.replace(s[i],alph[alph.indexOf(s[i-1])+parseInt(s[i])]); 
    }
    return s;
};
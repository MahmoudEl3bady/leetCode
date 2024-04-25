/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1 = word1.split('');
    let w2 = word2.split('');
    let res =[];
for(let i = 0;i<Math.max(w1.length,w2.length);i++){
    if(i<=Math.max(w1.length,w2.length)){
    res.push(w1[i])
    res.push(w2[i])        
   }
  else{
      break;
  }
}
//     if(w1.length>w2.length){
//         res.push(word1.substring(Math.min(w1.length,w2.length)-1));
//     }else if(w2.length>w1.length)
// {
//     res.push(word2.substring(Math.min(w1.length,w2.length)-1));
// }
    return res.join('');
};
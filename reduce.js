function countWords(inputWords) {
  return inputWords.reduce(function(cnt, word) {
    cnt[word] = ++cnt[word] || 1;
    return cnt; 
  },{});
}

module.exports = countWords


function findLongestWord(str) {
  
  var arr = [];
  var splitStr = "";
  
  arr = str.split(' ');
 
  
  var longestWord = 0;
  
  for (var i=0 ; i < arr.length ; i++) {
    
    if(arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  
  return longestWord;
 
  
  
  
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
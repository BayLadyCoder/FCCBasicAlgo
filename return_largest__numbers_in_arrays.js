
function largestOfFour(arr) {
  // You can do this!
  
  var result = [];
  var biggestNum = 0;
  
  for (var i=0 ; i < arr.length ; i++) {
    biggestNum = 0;
    for(var j=0 ; j < arr[i].length ; j++) {
     
      if (arr[i][j] > biggestNum) {
        
        biggestNum = arr[i][j];
      } 
    }
    
   result[i] = biggestNum;
  }
  
  return result;
  
  

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
 
  var result;
  
  function sortNumber (a, b) {
   return a-b; 
  }

  
    if (num < arr[0]) {
      
    arr.unshift(num);
      return 0;
    }
  
    else {
      arr.push(num);
      arr.sort(sortNumber);
      
      for (var i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                  return i;
                } 
      }   
      
       return arr.indexOf(num);
    }
  
}

getIndexToIns([5, 3, 20, 3], 5);
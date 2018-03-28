
function destroyer(arr) {
  // Remove all the values
  var newArr = [];
  
  var args = Array.prototype.slice.call(arguments, 1);
 
  
  for (var i=0 ; i<arr.length ; i++) {
    
    for(var j=0 ; j <args.length ; j++) {
      
      if (arr[i] === args[j]) {
        delete arr[i];
      }    
    }
  }
  
  
  newArr = arr.filter(Boolean);
    
  return newArr;
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
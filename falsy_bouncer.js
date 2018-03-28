function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  var newArr = [];
  
  newArr = arr.filter(function(val) {
    
   if (val !== false || val !== null || val !== 0 || val !== "" || val !== undefined || val !== isNaN) {
     return val;
   }
    
  });
  
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
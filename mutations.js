function mutation(arr) {
  
  var expression =/\w/gi;
  
  var index1 = arr[0].match(expression).join("").toLowerCase();
  var index2 = arr[1].match(expression).join("").toLowerCase();
  
  var index2Arr = index2.split('');
  var result = 0;
  
  for (var i=0 ; i < index2Arr.length ; i++) {
    
    var temp = index2Arr[i];
    
     if (index1.indexOf(temp) !== -1) {
    result += 0;
  }
  
  else {
    result -= 1;
  }
    
  }
  
  if (result !== -1) {
    return true;
  }
  
  else {
    return false;
  }

}

mutation(["Hello", "hey"]);
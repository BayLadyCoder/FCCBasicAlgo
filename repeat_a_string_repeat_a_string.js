
function repeatStringNumTimes(str, num) {
  // repeat after me
  
  var result = "";
  
  if (num > 0) {
      for (var i=0 ; i < num ; i++) {
    
          result += str;    
      }
    return result;
  }
  else {
    return "";
  }
  
  
}

repeatStringNumTimes("abc", 3);
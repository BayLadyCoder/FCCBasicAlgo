function confirmEnding(str, target) {
 
  var targetLength = target.length;
  var strLength = str.length;
  var indexStart = strLength - targetLength;
  
  if (str.substring(indexStart, strLength) === target) {
    return true;
  }  
  
  else {
    return false;
  }

  
}

confirmEnding("Bastian", "n");
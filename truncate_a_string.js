
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  var newStr = "";
  var strLength = str.length;
  var indexEnd;
  
  
  if (num> 3 && num >= strLength) {
    return str;
  }
  
  else if (num > 3) {
    newStr = str.slice(0, num-3) + "...";
    
    return newStr;
  }
  
  else {
    return str.slice(0, num) + "...";
  }
  
  
  
  
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
function palindrome(str) {
  
  var arr = [];
  var tempStr = "";
  var expression = /\S/gi;
  var filteredArr = [];
  var finalArr = [];
 
  var newstr = str.replace(/\W/gi, '');
  
  var reversedArr = [];
  
   tempStr = newstr.toLowerCase();
 
  
  arr = tempStr.match(expression);
  
   filteredArr = arr.filter(function(val) {
    return val !== '_';
  });

  finalArr = filteredArr.join('');
   reversedArr = filteredArr.reverse().join('');
  
  if (finalArr === reversedArr) {
    return true;
  }
  
  else {
    return false;
  }
  
}



palindrome("eye");
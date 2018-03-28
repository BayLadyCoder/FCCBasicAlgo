
function reverseString(str) {
  
  var arr = [];
  
  arr = str.split('').reverse().join('');
  
  return arr;
}

reverseString("hello");
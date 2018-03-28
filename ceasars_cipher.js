function rot13(str) { // LBH QVQ VG!
  
  var arr = [];
  var codeArr1 = [];
  var codeArr2 = [];
  var decodeArr = [];
  
  arr = str.split("");
  
  // str.charCodeAt(index)
  
  for (var i=0 ; i < arr.length ; i++) {
    for (var j=0 ; j < arr[i].length ; j++) {
      
      var temp = 0;
      temp = arr[i].charCodeAt(j);
      
       if (temp > 64 && temp < 91) {
        codeArr1[j] = ((temp%26)+65);
      }
      else {
        codeArr1[j] = temp;
      }
       // String.fromCharCode(num1[, ...[, numN]])
      codeArr2[j] = String.fromCharCode(codeArr1[j]);
    }
    
     decodeArr[i] =  codeArr2.join("");
  }
  return decodeArr.join("");
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
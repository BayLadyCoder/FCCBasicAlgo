
function titleCase(str) {
  
  var arr1 = [];
  var arr2 =[];
  
  arr1 = str.split(' ');
  
  for(var i=0 ; i < arr1.length ; i++) {
   
      var newStr = "";
    
      newStr = arr1[i];
    
      var strlength = newStr.length;
      var finalStr = "";
 
      finalStr = newStr.charAt(0).toUpperCase() +  newStr.slice(1, strlength).toLowerCase();
    
      arr1[i] = finalStr; 
    
  }
  
  var result; 
  
  result = arr1.join(' ');
  
  return result;
  
  
  
}

titleCase("I'm a little tea pot");
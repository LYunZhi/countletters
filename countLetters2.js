function countLetters (str) {
  var result = {};
  var strArr = str.split(' ').join('').split('')


  for (var i = 0; i < strArr.length; i++) {
    result[strArr[i]] = result[strArr[i]] || 0;
    result[strArr[i]]++
  }

  return result
}

console.log(countLetters("hello there"))
function countLetters (str) {
  var result = {}
  var strArr = str.split(' ').join('').split('')

  for (var i = 0; i < strArr.length; i++) {
    result[strArr[i]] = '0'
  }

  for (var j = 0; j < strArr.length; j++) {
    if(result[strArr[j]]) {
      result[strArr[j]] = Number(result[strArr[j]]) + 1
    }
  }

  return result
}

console.log(countLetters("hello there"))
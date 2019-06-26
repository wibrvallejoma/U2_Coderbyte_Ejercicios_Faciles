function MaximalSquare(strArr) {
  var large = 0;
  for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < strArr[0].length; j++) {
      if (largest(allSubs(strArr, i, j)) > large) {
        large = largest(allSubs(strArr, i, j));
      }
    }
  }
  return large;
}

function allSubs(matrix, x, y) {
  var retArr = [];
  var temp = [];
  for (var size = 1; size < matrix[0].length - x + 1; size++) {
    temp = [];
    if (size <= matrix.length - y) {
      for (var i = y; i < y + size; i++) {
        temp.push(matrix[i].substring(x, x + size));
      }
    }
    if (temp.length != 0) {
      retArr.push(temp);
    }
  }
  return retArr;
}
var mat = ["0111", "1101", "0111"];

function printAll(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function largest(list) {
  var large = 0;
  for (var i = 0; i < list.length; i++) {
    if (checkSquare(list[i])) {
      large = list[i].length * list[i].length;
    }
  }
  return large;
}

function checkSquare(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0]; j++) {
      if (matrix[i][j] == "0") return false;
    }
  }
  return true;
}

// keep this function call here
MaximalSquare(readline());

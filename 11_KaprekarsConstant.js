function KaprekarsConstant(num) {
  num = num.toString().split("");
  while (num.length < 4) {
    num.push(0);
  }
  var sum = parseInt(num.join(""));
  var temp = 0;
  var count = 0;

  while (sum !== 6174) {
    for (var i = 0; i < num.length; i++) {
      for (var j = i + 1; j < num.length; j++) {
        if (num[i] < num[j]) {
          temp = num[i];
          num[i] = num[j];
          num[j] = temp;
        }
      }
    }
    sum = parseInt(num.join("")) - parseInt(num.reverse().join(""));
    num = sum.toString().split("");
    while (num.length < 4) {
      num.push(0);
    }
    count++;
  }
  return count;
}

// keep this function call here
KaprekarsConstant(readline());

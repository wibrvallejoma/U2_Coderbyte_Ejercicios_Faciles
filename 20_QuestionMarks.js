function QuestionsMarks(str) {
  var value = false;
  var arr = str.split("");

  arr = arr.filter(function(char) {
    return char === "?" || (Number.isInteger(Number(char)) && char !== " ");
  });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    var digit = arr[i];

    if (digit !== "?") {
      var count = 0;

      for (var j = i + 1; j < arr.length; j++) {
        var num2 = arr[j];
        if (num2 === "?") {
          count++;
        } else if (Number(digit) + Number(num2) === 10) {
          if (count !== 3) {
            return false;
          }
          count = 0;
          value = true;
          break;
        }
      }
    }
  }
  return value;
}

// keep this function call here
QuestionsMarks(readline());

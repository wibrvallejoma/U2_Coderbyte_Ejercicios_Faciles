function AlphabetSoup(str) {
  var arrays = str.split("");
  var reversed = arrays.sort();
  var result = reversed.join("");

  return result;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());

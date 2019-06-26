function SimpleSymbols(str) {
  if (str.charAt(0).match(/[a-z]/i)) return false;

  if (str.charAt(str.length - 1).match(/[a-z]/i)) return false;

  for (j = 1; j < str.length; j++) {
    if (
      str.charAt(j).match(/[a-z]/i) &&
      (str.substr(j - 1, 1) != "+" || str.substr(j + 1, 1) != "+")
    )
      return false;
  }
  return true;
}

// keep this function call here
SimpleSymbols(readline());

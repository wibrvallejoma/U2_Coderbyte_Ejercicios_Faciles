function LetterCapitalize(str) {
  // code goes here
  arr = str.split(" ");
  var contador = 0;
  arr.forEach(palabra => {
    arr[contador] =
      palabra.substring(0, 1).toUpperCase() + palabra.substring(1);
    contador++;
  });

  arr = arr.join(" ");
  return arr;
}

// keep this function call here
LetterCapitalize(readline());

/*
Challenge
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

//Vallejo Mariscal Williams Bricaire - 15401067

function LongestWord(sen) {
  // code goes here
  var arr = sen.match(/[a-z0-9]+/gi);

  var masLarga = "";

  arr.forEach(palabra => {
    if (palabra.length > masLarga.length) {
      masLarga = palabra;
    }
  });
  return masLarga;
}

// keep this function call here
LongestWord(readline());

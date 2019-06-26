function ChessboardTraveling(str) {
  var numberOfPaths;

  var array = str.replace(/\D/g, "").split("");

  const totalNumberOfMoves = array[2] - array[0] + (array[3] - array[1]);
  const numberOfUpMoves = array[2] - array[0];

  combination();

  function factorial(n) {
    return n < 2 ? 1 : factorial(n - 1) * n;
  }

  function combination() {
    numberOfPaths =
      factorial(totalNumberOfMoves) /
      (factorial(numberOfUpMoves) *
        factorial(totalNumberOfMoves - numberOfUpMoves));
  }

  return numberOfPaths;
}

// keep this function call here
ChessboardTraveling(readline());

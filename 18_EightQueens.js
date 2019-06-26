function EightQueens(strArr) {
  let firstMatch = null;
  let matches = strArr.some(function(loc, index) {
    if (canAttack(strArr, loc[1], loc[3])) {
      firstMatch = index;
      return true;
    }
  });

  if (matches) {
    return strArr[firstMatch];
  }
  return "true";

  function canAttack(strArr, x, y) {
    return strArr.some(function(loc) {
      let coords = loc.substr(1, loc.length - 2).split(",");
      // Check for same piece
      if (coords[0] === x && coords[1] === y) {
        return false;
      }
      // Check for horizontal moves
      if (coords[0] === x) {
        return true;
      }
      // Check for vertical moves
      if (coords[1] === y) {
        return true;
      }
      // Check for diagonal moves
      if (Math.abs(coords[0] - x) === Math.abs(coords[1] - y)) {
        return true;
      }
      return false;
    });
  }
}

// keep this function call here

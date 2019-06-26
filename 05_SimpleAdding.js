function SimpleAdding(num) {
  // code goes here
  return sumatoria(num);
}

function sumatoria(num) {
  return num === 1 ? 1 : num + sumatoria(num - 1);
}

// keep this function call here
SimpleAdding(readline());

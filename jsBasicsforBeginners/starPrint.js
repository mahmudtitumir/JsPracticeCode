showStar(10);

function showStar(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) pattern += "*";
    console.log(pattern);
  }
}

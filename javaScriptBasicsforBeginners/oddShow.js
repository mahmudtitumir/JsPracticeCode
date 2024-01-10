oddEvenShow(50);

function oddEvenShow(limits) {
  for (let i = 0; i <= limits; i++) {
    if (i % 2 == 0) {
      console.log(i, "EVEN");
    } else {
      console.log(i, "ODD");
    }
  }
}

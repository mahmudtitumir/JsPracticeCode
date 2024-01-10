let num1 = 14,
  num2 = 22;
if (num1 < num2) {
  console.log(num2, "is max number");
} else {
  console.log(num1, "is min number");
}

// user define function
function maximumNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maximumNum(455, 55));

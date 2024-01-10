const numbers = arrayFromRange(-5, 8);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let n = min; n <= max; n++) output.push(n);
  return output;
}

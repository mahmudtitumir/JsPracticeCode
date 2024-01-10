const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(2));
console.log(checkArray(numbers, 2));

// alt. of the includes method
function checkArray(array, searchElement) {
  for (let index of array) if (index == searchElement) return true;
  return false;
}

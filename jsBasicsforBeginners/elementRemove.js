const numbers = [1, 2, 3, 4, 5, 6, 7, 1];

console.log(except(numbers, [1, 3]));
function except(array, remove) {
  let output = [];
  for (let element of array)
    if (!remove.includes(element)) output.push(element);
  return output;
}

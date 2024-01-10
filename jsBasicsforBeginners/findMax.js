const numbers = [3, 2, 4, 7];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  /*
  if (array.length == 0) return undefined;
  let largest = 0;
  for (let num of array) if (largest < num) largest = num;
  return largest;
  */
  // let max = array[0];
  // for (let i = 0; i < array.length; i++) if (array[i] > max) max = array[i];
  // return max;
  if (array.length == 0) return undefined;
  return array.reduce((a, b) => (a > b ? a : b));
}

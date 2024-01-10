const numbers = [1, 2, 3, 1, 4, 5, 1];
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
  /*
  // for loop solution
  let found = 0;
  for (let element of array) if (element == searchElement) found++;
  return found;
  */

  // reduce method solution
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

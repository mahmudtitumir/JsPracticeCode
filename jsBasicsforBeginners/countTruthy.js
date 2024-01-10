let arr = [undefined, 0, 2, 4, 5];
console.log(findTruthy(arr));

function findTruthy(arr) {
  let count = 0;
  for (let value of arr) if (value) count++;
  return count;
}

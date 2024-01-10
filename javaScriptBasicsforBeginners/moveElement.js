const numbers = [1, 2, 3, 4, 5];
console.log("Orginal:", numbers);
const newNum = move(numbers, 4, -4);
console.log("Modify: ", newNum);

function move(array, target, offset) {
  const position = target + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset.");
    return;
  }
  // output variable declar for safe of origenal array
  const output = [...array];
  // element variable idendify offset number with splice method.
  const element = output.splice(target, 1)[0];
  // console.log(element);
  // element variable add new position into output variable according to the function parameter.
  output.splice(position, 0, element);
  return output;
}

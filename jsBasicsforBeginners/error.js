try {
  const numbers = [1, 2, 3, 1, 4, 5, 1];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.Error);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid entry!");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

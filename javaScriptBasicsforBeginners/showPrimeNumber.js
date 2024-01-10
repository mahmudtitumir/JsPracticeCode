showPrimeNumber(10);

function showPrimeNumber(limit) {
  for (let number = 2; number <= limit; number++)
    if (isFactor(number)) console.log(number);
}
function isFactor(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

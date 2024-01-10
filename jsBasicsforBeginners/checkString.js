let movie = {
  title: "abcd",
  year: 2000,
  author: "xyz",
  income: 20,
};
console.log(showPropertya(movie));

function showPropertya(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 3 },
  { title: "c", year: 2017, rating: 4.2 },
  { title: "d", year: 2018, rating: 4.7 },
];
/*
// sort movies in 2018 with rating > 4
movies.sort(function (a, b) {
  if (a.year === 2018 && b.rating > 4) return -1;
});
console.log(movies);
*/
// All the movies in 2018 with rating > 4,
// Sort them by their rating,
// Descending order,
// Pick their title
const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);
console.log(titles);

/* sort method:
a > b then return -1
a == b then return 0
a < b then return 1
again simplipy:
a=4.5 - b=4
.5 then return a>b
0 then return a==b
-.5 then return a<b 
*/

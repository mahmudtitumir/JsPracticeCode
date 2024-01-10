/*
this file to be use code perform
const first = [1, 2, 3];
const last = [4, 5, 6];

const combined = first.concat(last);
const sliced = combined.slice();
console.log(sliced);

const combined = [...first, ...last];
const combined = [...first, "a", ...last, "b"];
const copy = [...combined];
console.log(combined);
console.log(copy);


function sum(discount, ...prices) {
  // let total = 0;
  // for (let value of arguments) total += value;
  // return total;
  // return prices.reduce((a, b) => a + b);
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.05, 20, 30));


// window vs global
const obj = {
  property: `I'm a property of obj.`,
  method: function () {
    console.log(this.property);
  },
};
obj.method();

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    });
  },
};
video.showTags.bind(this);

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
*/

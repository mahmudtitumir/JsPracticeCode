// Factory Fuction
function car(model) {
  return {
    model: model,
    start: function () {
      console.log("start");
    },
  };
}
console.log(car("tesla"));

// Constructor Function
/*
* constructor property kaj kore new keyword define korar modde.
* let x = {}; // defined
* let x = new Object(); // convert it js engine
*/
function Car(model) {
  this.model = model;
  this.start = function () {
    console.log("start");
  };
}
const car1 = new Car("bmw");
console.log(car1);

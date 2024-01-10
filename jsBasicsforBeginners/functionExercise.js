// factory function
/*
function showAddress(street, city, zipCode) {
  return { street, city, zipCode };
}
let address = showAddress("64/1", "dhaka", 1210);
console.log(address);
*/
// constructor function
function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let Address = new ShowAddress("10/5", "noakhali", 3654);
console.log(Address);

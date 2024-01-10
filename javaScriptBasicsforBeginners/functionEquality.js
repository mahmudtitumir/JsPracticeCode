let address1 = new ShowAddress("21", "dhaka", 1200);
let address2 = new ShowAddress("21", "dhaka", 1200);
// let address2 = new ShowAddress("12", "feni", 4400);
let address3 = address2;
console.log(isEqulity(address1, address2));
console.log(areSame(address1, address3));
console.log(areSame(address2, address3));

// constructor function equality
function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// to check the object property(reference)
function isEqulity(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// to check object are same
function areSame(address1, address2) {
  return address1 === address2;
}

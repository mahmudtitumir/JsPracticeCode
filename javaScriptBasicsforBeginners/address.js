let address = {
  street: "64/1",
  city: "dhaka",
  zipCode: 1211,
};
function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);

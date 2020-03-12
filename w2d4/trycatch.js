//Kind of errors
const fs = require("fs");
const taxes = 1.14975;
console.log("The taxes will be changed");

// Type error : taxes = 1;
// taxes.map(() => console.log("yay"));
// console.log(taxes.name.firstName);

//Syntax errors
// if(true)
//   console.log('yay')
// }

// const ternary = 4 > 6 ? true : false;

// const HGTTG = var42;
// const bob = function() {
//   console.log("Hi bob.");
// };
// bob = function() {
//   console.log("Hi chicken.");
// };

// bob();

//Type error

// Reference error

try {
  taxes = 0;
  console.log("YAY THE TAXES HAS BEEN CHANGED");
} catch (error) {
  // console.log(error.name);
  console.log("SORRY CANT CHANGE THE TAXES");
  fs.writeFileSync("error.txt", error);
}

console.log("MWAHAHA");

console.log(new Error("ERROR LOGIN PERSON BAD"));

// try {
//   setInterval(() => (taxes = 0), 2000);
// } catch (e) {
//   console.log(e);
// }
try {
  setInterval(() => {
    try {
      taxes = 0;
    } catch (error) {
      console.log(error);
    }
  }, 2000);
} catch (e) {
  console.log(e);
}

console.log("FINISHED");

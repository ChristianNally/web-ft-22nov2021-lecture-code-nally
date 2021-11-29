const assert = require("assert");

// implement a function called sayHello that takes 
// the name of the saluted and returns what would be said.
const sayHello = (name) => {
  return `Hello, ${name}`;
};

// show some test code here at first, and then factor it out later

const returnValue = sayHello('My Little Friend');
console.log("returnValue:", returnValue);

assert.equal(sayHello("Tony"), "Hello, Tony");

// make the functions exportable
module.exports = {
  sayHello: sayHello
};

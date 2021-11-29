// pull in whichever assert library you'd like to use
const assert = require("assert");

// pull in the main functions that will be tested
const testFunctions = require('../hello-world');

// write the mocha describe() and it() function calls that will implement the test(s)


it("says hello to Monkey Fuzz", () => {

  assert.equal(testFunctions.sayHello("MonkeyFuzz"), "Hello, MonkeyFuzzz");

});

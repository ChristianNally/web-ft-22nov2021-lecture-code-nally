// pull in whichever assert library you'd like to use
const assert = require("chai").assert;

// pull in the main functions that will be tested
const testFunctions = require('../hello-world');

// write the mocha describe() and it() function calls that will implement the test(s)



describe("This is a group of tests", ()=>{

  it("says hello to Monkey Fuzz", () => {
    const actual = testFunctions.sayHello("MonkeyFuzz");
    const expected = "Hello, MonkeyFuzz";
    assert.equal(actual, expected);
  });

  it("says hello to World", () => {
    assert.equal(testFunctions.sayHello("World"), "Hello, World");
  });

});

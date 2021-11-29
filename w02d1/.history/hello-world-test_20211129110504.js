const assert = require("assert");
const testFunctions = require('./hello-world');

assert.equal(testFunctions.sayHello("Monkey Fuzz"), "Hello, Monkey Fuzz");

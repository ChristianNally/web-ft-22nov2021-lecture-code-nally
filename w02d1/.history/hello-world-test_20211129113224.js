const assert = require("assert");
const testFunctions = require('./hello-world');

assert.equal(testFunctions.sayHello("MonkeyFuzz"), "Hello, MonkeyFuzz");

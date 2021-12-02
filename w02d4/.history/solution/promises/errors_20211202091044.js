const collectionOfPromiseGenerators = require('./promise-generator');

const returnPromise = collectionOfPromiseGenerators.returnPromise;
const returnRejectedPromise = collectionOfPromiseGenerators.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one',1000)
  .then((data) => {
    console.log(data);
    return returnPromise('two',1000);
  })
  .then((data) => {
    console.log(data);
    return "three";
  })
  .then((data) => {
    console.log(data);
    return returnPromise('four',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('five',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('six',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('err first:',err);
  });
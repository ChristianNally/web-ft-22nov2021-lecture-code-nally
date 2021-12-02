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
    return returnPromise('three',1000);
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

  console.log('stuck in the middle');

  returnPromise('1',1000)
  .then((data) => {
    console.log(data);
    return returnPromise('2',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('3',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('4',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('5',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('6',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('err 123:',err);
  });

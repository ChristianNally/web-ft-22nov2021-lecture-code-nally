const collectionOfPromiseGenerators = require('./promise-generator');

const returnPromise = collectionOfPromiseGenerators.returnPromise;
// const returnRejectedPromise = collectionOfPromiseGenerators.returnRejectedPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:',promise);

console.log('first');
console.log('second');

// Not the best way to do this
setTimeout(()=>{
  console.log('2 seconds later:',promise);
},2000);

//
// The RIGHT way to do this
//

// promise
//   .then((data) => {
//     console.log('first');
//     console.log('second');
//     const newData = 'another thing';
//     console.log("newData:",newData);
//     console.log('data:', data);
//   });

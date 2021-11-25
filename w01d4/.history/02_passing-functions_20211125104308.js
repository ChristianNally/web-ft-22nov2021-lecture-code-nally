// callback;
//   a function that gets passed to another function
//   to be invoked by that second function


// // higher order function (HOF)
// // a function that accepts another function as an argument


const sayHello = function(name) {
  console.log(`hello there ${name}`);
};


function processor(arg1, callback){
  // does some stuff
  const newValue = arg1 + 5;
  callback(newValue);
}


processor(1,sayHello);






// const sayHello2 = function(name) {
//   console.log("sayHello2 logs:",`hola!! ${name}`);
// };





// // const addTwo = function(num) {
// //   console.log(num + 2);
// // };

// runMe(sayHello2);


// // runMe(addTwo);

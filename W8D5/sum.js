function sum(args) {
  // let arr = Array.prototype.slice.call(arguments);
  let arr = Array.from(arguments); 
  return arr.reduce((acc, ele) => acc + ele);

  // for(let i = 0; i < arguments.length; i++){
  //   console.log(arguments[i]);
  // }
}

function sum(...arguments) {
  // return arguments.reduce(function(acc, ele) {
  //   return acc + ele;
  // });

  return arguments.reduce((acc, ele) => acc + ele);
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));
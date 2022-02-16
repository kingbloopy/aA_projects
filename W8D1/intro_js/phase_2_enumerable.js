
// const multiply = function(ele) {
//   return ele * ele;
// }

// console.log([1, 2, 3].forEach((ele) => multiply(ele)))
// arr = [0, 2, -4, 6, 3, 3, 6, -2, 5, 4, 7, -6]
// console.log(arr.myEach(multiply))
// console.log([1, 2, 3].myEach(multiply))

// Array.prototype.myMap = function(cb) {
  //   let mapped = [];
  //   for (let i = 0; i < this.length; i++) {
    //     mapped.push(cb(this[i]));
    //   }
    //   return mapped;
    // }
    
    
    // Array.prototype.myMap = function(cb) {
      //   let mapped = [];
      
      //   this.myEach(ele){ mapped.push(cb(ele));
      //     // mapped.push(cb(this[i]));
      
      //   return mapped;
      // }
      
      // Array.prototype.myMap = function(cb) {
        //   let mapped = [];
        
        //   this.myEach((ele) => mapped.push(cb(ele)));
        //   // mapped.push(cb(this[i]));
        
        //   return mapped;
        // }
        
        // console.log([1, 2, 3].myMap(multiply));
        // console.log(arr.myMap(multiply));
        
Array.prototype.myEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

const multiply = function (acc, ele) {
  return ele * ele;
}
        
// Array.prototype.myReduce = function (cb, initialValue=null){
//   let acc;
//   if (initialValue !== null){
//     acc = initialValue;
//     this.myEach((ele) => acc = cb(acc, ele));
//   } else {
//     acc = this[0];
//     this.slice(1).myEach((ele) => acc = cb(acc, ele));
//   }
//   return acc;
// }
        
Array.prototype.myReduce = function (cb, initialValue){
  // let acc;
  let arr = this;

  if (initialValue == null){
    initialValue = arr[0];
    arr = arr.slice(1);
  }
  let acc = initialValue;
  arr.myEach(ele => acc = cb(acc, ele));
  return acc;
}


console.log([1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
}, 25)); // => 31

console.log([1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
})); // => 6



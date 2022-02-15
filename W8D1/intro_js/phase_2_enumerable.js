Array.prototype.myEach = function(cb) {
  debugger
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
    console.log(cb(this[i]))
  }
}

const multiply = function(ele) {
  return ele * ele;
}

// console.log([1, 2, 3].forEach((ele) => multiply(ele)))
// arr = [0, 2, -4, 6, 3, 3, 6, -2, 5, 4, 7, -6]
// console.log(arr.myEach(multiply))
// console.log([1, 2, 3].myEach(multiply))

Array.prototype.myMap = function(cb) {
  let mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(cb(this[i]));
  }
  return mapped;
}

// console.log(arr.myMap(multiply));
console.log([1, 2, 3].myMap(multiply));
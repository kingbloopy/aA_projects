Array.prototype.uniq = function() {
  let uniqArr = [];
  for(let i = 0; i < this.length; i++ ) {
    if (!uniqArr.includes(this[i])){
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
}
arr = [0, 2, -4, 6, 3, 3, 6, -2, 5, 4, 7, -6]
// console.log(arr.uniq())

Array.prototype.twoSum = function() {
  let pairs = [];
  for(let i = 0; i < this.length; i++ ) {
    for(let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) {
        pairs.push([this[i], this[j]]);
      }
    }
  }
  return pairs
}
console.log(arr.twoSum())
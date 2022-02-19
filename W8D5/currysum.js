function curriedSum(numArgs) {
  let count = 0;
  let sum = 0;

  return function _curriedSum(num) {
    count += 1;
    if (count === numArgs) {  
      sum += num;
      return sum;
    }
    else {
      sum += num;
      return _curriedSum;
    }
  }
}

const result = curriedSum(4);
console.log(result(5)(30)(20)(1)); // 56


Function.prototype.curry = function(numArgs) {
  let arr = [];
  let that = this;
  return function _collectArgs(arg) {
    arr.push(arg);
    if (arr.length === numArgs) {
      // return that(...arr);
      return that.apply(that, arr);
    } else {
      return _collectArgs;
    }
  }
}

function sumNums(num1, num2, num3){
  return num1 + num2 + num3;
}

console.log(sumNums(1, 2, 3));
// console.log(sumNums(1)(2)(3)); // errors out!
console.log(sumNums.curry(3)(1)(2)(3));
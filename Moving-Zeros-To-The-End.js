var moveZeros = function (arr) {
    var moveZeros = function (arr) {
        return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
      }
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]))
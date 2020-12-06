// function highAndLow(numbers){

//     let num = numbers.split(' ').sort((a, b) => a - b)
   
//     if(num.length > 1){
//         result = num.pop() + " " + num.shift()
//         return result
//     } else {
//         result = num[0] + " " + num[0]
//         return result
//     }
  
// }

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    console.log(numbers)
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
console.log(highAndLow("42"))


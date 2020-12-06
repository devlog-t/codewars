// function getMiddle(s) {
    
//     let arr = s.split('')
//     let oddOrEven = arr.length%2

//     if(oddOrEven){

//         return arr[(arr.length-1)/2]

//     } else {

//         return arr[(arr.length-2)/2]+arr[((arr.length-2)/2)+1]

//     }
// }

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middlrgrgrgrggerhyenberg"))
console.log(getMiddle("A"))

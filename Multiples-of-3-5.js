// function solution(number){
//     let tableau = [];
//     number--;

//     while(number !=0){
        
//         if(!(number%3) || !(number%5)){
//             tableau.push(number);
//             number--;
//         }else{
//             number--;
//     }
//   } 
//   return tableau.reduce((a, b) => a + b, 0);
//     // return !(number%5)
// }

// function solution(number){
//     let sum = 0;
//     const isMultiple = (num, mode) => (num % mode ? false : true);

//     for(let i = 0; i < number; i++){
//         if(isMultiple(i, 3) || isMultiple(i, 5)) sum += i;
//     }
//     return sum
// }

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }


console.log(solution(10)); //expected 23
console.log(solution(32));
console.log(solution(47)); 

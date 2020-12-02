function findOdd(A) {
    let sortArray = A.sort((a, b) => a - b, 0)
    

    let value = 0;
    let count = 0;


    for(let i = 0; i < A.length; i++){
        
        value += A[i]
        
    }
    return value;
  }

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
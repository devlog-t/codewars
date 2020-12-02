function solve(arr){

    let arraySort = arr.slice();
    arraySort.sort((a,b) => a-b);
    for(let i = 0; i < arraySort.length; i +=2){
        console.log(i)
        console.log(arraySort)
        arraySort.splice(i, 0, arraySort.pop());
        console.log(arraySort)

    }
    return arraySort;
    
};

console.log(solve([15,11,10,7,12]));

function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
  }
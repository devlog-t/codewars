function persistence(num, count = 0) {
    
    let arr = num.toString().split('').map(x => +x);

    if(arr.length === 1){
        return count
    }
    else
    {
        let sum = 1;
        
        for(let i = 0; i < arr.length; i++){
            sum = sum * arr[i];
            
        }
        count++
        return persistence(sum, count)
    }
}

console.log(persistence(39))
// console.log(persistence(4))
// console.log(persistence(25))
// console.log(persistence(999))

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }
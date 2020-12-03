function sumStrings(a,b) {
    let arr = [a, b]
    let sum = 0;

    let numArr = arr.map((x) => +x) 
    numArr.forEach(element => {
       sum += element 
    });

    return sum.toFixed(100)
    // toLocaleString('fullwide', {useGrouping:false})
}

console.log(sumStrings('123','456'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
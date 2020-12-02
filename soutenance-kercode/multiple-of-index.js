function multipleOfIndex(array) {
    let arr = []
    for(let i = 0; i < array.length; i++){
        if((array[i] % i === 0)){
            arr.push(array[i])
        }
    }

    return arr
}

//retourner tableau contenant les chiffres divisible pas leur index

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([11, -11]));
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));
console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]));
console.log(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]));

/// SOLUTIONS ///

function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
}

function orderWeight(strng) {
    
    let arr = strng.split(/\s+/gi)
    arr.forEach(element => {
       console.log(element.split('').map((x) => +x))

    });
    return arr

}

console.log(orderWeight("103   123 4444 99 2000")) //2000 103 123 4444 99
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //11 11 2000 10003 22 123 1234000 44444444 9999

//Objet avec number : weight; boucler sur objet pour réclasser selon ordre croissant fonciton poids et en cas égalité de poids chosii selon ordre alphabétique depuis propiété.
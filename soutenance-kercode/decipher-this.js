function decipherThis(str) {
    
    let arr = str.split(' ')
    console.log(arr)
    arr.forEach(element => {
        let charCode = element.match(/[0-9]/gi).join('')
        // let letter = element.replace().match(/[a-z]/gi)
        console.log(String.fromCharCode(charCode))
        // console.log(letter)
        
    });
}; 

//replace foreach element of arr the match ref. in range 64 to ... with correspondance of charCode...
//How to switch the second and last letter of each element of array ?
//join original words with whitespace

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) 
//Have a go at this and see how you do


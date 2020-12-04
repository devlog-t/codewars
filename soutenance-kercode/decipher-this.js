function decipherThis(str) {
    
    let arr = str.split(' ')
    console.log(arr)

    arr.forEach(element => {
        // let charCode = element.match(/[0-9]/gi).join('')
        // let charCode = element.replace(/[0-9]/gi, )
        let charCode = element.replace(/[0-9]/gi, String.fromCharCode(element.match(/[0-9]/gi)))
        
        let letterArr = element.match(/[a-z]/gi)
        
        //Forecach element separate charcode translation and the rest of the word
        //charcode = translate and return a string
        // word = if != null cut in array and invert 1st and last letter else return the number, join and return a array of string

        if(letterArr != null){
            let letter = [letterArr.join('')]
            console.log(letter)
        }    

        // console.log([String.fromCharCode(charCode)])
        console.log(charCode)

        
    });
}; 

//replace foreach element of arr the match ref. in range 64 to ... with correspondance of charCode...
//How to switch the second and last letter of each element of array ?
//join original words with whitespace

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) 
//Have a go at this and see how you do


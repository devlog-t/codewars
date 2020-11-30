function pigIt(str){

    let words = (str.split(' ')); //array
    // console.log(words)

    for(let i = 0; i < words.length; i++){
        // console.log(words[i])
        if(/[a-zA-Z]/.test(words[i])){
            words[i] = words[i].slice(1) + words[i][0] + 'ay';
        }
        // console.log(words[i])

    }
    return words.join(' ')
    
  }

  console.log(pigIt('Pig latin is cool'));
//pigIt('This is my string');
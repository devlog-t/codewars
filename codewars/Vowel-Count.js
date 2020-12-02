// function getCount(str) {
//     var vowelsCount = str.match(/[aeiou]/gi);
    
//     if(vowelsCount){
//         return vowelsCount.length;
//     } else {
//         return 0;
//     }
    
//   }

  console.log(getCount("abracadabra"));
  console.log(getCount("my pyx"));

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
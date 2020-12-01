function getAverage(marks){
    var total = 0;
    for(var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    var avg = total / marks.length; 
    return Math.floor(avg)
}

function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }

console.log(getAverage([1,2,3,4,5,]));
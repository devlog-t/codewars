function getAverage(marks){
    var total = 0;
    for(var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    var avg = total / marks.length; 
    return Math.round(avg)
}

getAverage([1,2,3,4,5,]);
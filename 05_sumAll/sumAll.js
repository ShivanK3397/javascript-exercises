const sumAll = function(start,end) {
    if(typeof start!=="number"||typeof end!=="number"||start<0||end<0){
        return "ERROR";
    }

    if(start>end){
        tempStart=start;
        tempEnd=end;
        start=tempEnd;
        end=tempStart;
    }
    let i =start;
    let sum=0;
    while(i<=end){
        sum+=i;
        i++;

    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

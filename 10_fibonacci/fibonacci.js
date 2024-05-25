const fibonacci = function(num) {
    firstNum=0;
    secondNum=1;
    if (num<0){
        return "OOPS";
    }
    for (let i = 0;i<num;i++){
        let tempNum = secondNum;
        secondNum=firstNum+secondNum;
        firstNum=tempNum;
    }
    return firstNum;
};


// Do not edit below this line
module.exports = fibonacci;

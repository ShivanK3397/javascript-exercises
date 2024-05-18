const reverseString = function(string) {
    const arrayReverseString=[];
    for (let i = 0;i<string.length;i++){
        arrayReverseString[i]=string[string.length-1-i];
    }
    return arrayReverseString.join(" ")

};

// Do not edit below this line
module.exports = reverseString;

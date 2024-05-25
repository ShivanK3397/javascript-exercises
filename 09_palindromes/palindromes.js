const palindromes = function (str) {
    const arr = str.toLowerCase().split("").reverse();
    let newStr="";
    let reverseStr="";
    for (let i = 0;i<arr.length;i++){
        if(arr[i]===" "||!/^[a-zA-Z0-9]+$/.test(arr[i])){


        }
        else{
            newStr+=arr[i];
            
        }
    }    
    for (let i = arr.length-1;i>=0;i--){
        if(arr[i]===" "||!/^[a-zA-Z0-9]+$/.test(arr[i])){


        }
        else{
            reverseStr+=arr[i];
            
        }
        
    }
  ;
return newStr===reverseStr;
    
};




// Do not edit below this line
module.exports = palindromes;

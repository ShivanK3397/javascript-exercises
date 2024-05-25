const getTheTitles = function(arr) {
    return arr.reduce((titles,current)=>{
        titles.push(current.title);
        return titles;
    },[]);

};

// Do not edit below this line
module.exports = getTheTitles;

const removeFromArray = function(array, ...removeValues) {
    const arrayRemoveValues =Array.from(removeValues);
    return array.filter((value)=>(!arrayRemoveValues.includes(value)));
    
};

// Do not edit below this line
module.exports = removeFromArray;

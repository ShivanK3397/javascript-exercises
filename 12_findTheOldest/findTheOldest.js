const findTheOldest = function(arr) {
    return arr.reduce((oldest,current)=>{
        if (oldest.yearOfBirth===undefined){
            oldest=current;
            return oldest;
        }

        let dateOfBirth = current.yearOfBirth;
        let dateOfDeath = current.yearOfDeath;
        if(dateOfDeath===undefined){
            dateOfDeath = new Date().getFullYear()
        }
        let currentAge = dateOfDeath-dateOfBirth;
        let oldestDateOfBirth = oldest.yearOfBirth;

        let oldestDateOfDeath = oldest.yearOfDeath;
        if(oldestDateOfDeath===undefined){
            oldestDateOfDeath = new Date().getFullYear()
        }
        let oldestAge= oldestDateOfDeath-oldestDateOfBirth;
        if(currentAge>oldestAge){
            oldest=current;
        }
        return oldest;
        

    },{})

};

// Do not edit below this line
module.exports = findTheOldest;

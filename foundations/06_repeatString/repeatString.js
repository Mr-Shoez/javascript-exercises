const repeatString = function(string, integer) {
 const theWord = string;
 const theNumber = integer;


 if (theNumber < 0) {
    return "ERROR";
  }
 let dupWord =  "";
 

 for (let i = 0; i < theNumber; i++) {
    dupWord += theWord;
    
 }
 return(dupWord);
};

console.log(repeatString("mosa", 10));

// Do not edit below this line
module.exports = repeatString;

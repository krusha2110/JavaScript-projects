/*Create a function to reverse a string
for ex. coding should become "gnidoc" */

function reverseString(str) {
    
    //Use split method to convert string to array 
    var strArray=str.split(""); //["c", "o", "d", "i", "n", "g"]
    
    //Then use reverse method to reverse an array
    var revArray=strArray.reverse();//["g", "n", "i", "d", "o", "c"]
    
    //Join method to convert Array to String
    var revStr=revArray.join("");//gnidoc
    
    return revStr;
}

var answer=reverseString("coding");
console.log(answer);//gnidoc
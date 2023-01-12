function stringConstruction(s) {
    let sampleArr =[]
 
 for(let char of s){
     if(!sampleArr.includes(char)){   
         sampleArr.push(char)
     }
 }
 
 return sampleArr.length;
 }
 
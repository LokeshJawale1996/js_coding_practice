function pangrams(s) {
    // Write your code here
    //converted all string letters to lowercase
   let strArr = s.toLowerCase();
   //splitted all letters from a-z on spaces
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   
   //now loop over the all alphabets from a-z
   for (let i = 0; i < alphabet.length; i++) {
    //and if the the letters which is present in passig string all are not present in a-z then return non pangram otherwise return pangram
    
    if (strArr.indexOf(alphabet[i]) < 0) {
        
        return 'not pangram';
    }
    
}
return 'pangram'
}

let s = 'We promptly judged antique ivory buckles for the prize'
console.log(pangrams(s));

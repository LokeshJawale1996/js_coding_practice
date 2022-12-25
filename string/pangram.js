function pangrams(s) {
    // Write your code here
   let strArr = s.toLowerCase();
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   
   for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
        
        return 'not pangram';
    }
    
}
return 'pangram'
}

let s = 'We promptly judged antique ivory buckles for the prize'
console.log(pangrams(s));

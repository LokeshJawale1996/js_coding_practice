function alternatingCharacters(s) {
    // Write your code here
let newArr = s.split('');
console.log(newArr);
let count=0;
for(let i =0; i <newArr.length ; i++){
    if(newArr[i] ==='A' && newArr[i+1] ==='A' || newArr[i] ==='B' && newArr[i+1] ==='B'){
        count++;
    }
}
return count;
}
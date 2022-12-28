function camelcase(s) {
    // Write your code here
let newArray=s.split(/[A-Z]/);
// console.log(newArray);
return newArray.length;

}

console.log(camelcase("oneTwoThreeFour"));
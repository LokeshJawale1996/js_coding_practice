//1)find the length of the occures in the string.
let str = "Hi a am the aki loki an the a after then a see how work the";
let count = 0;
let strSpli = str.split(" ");
let mm = [];
let theoccu = strSpli.filter((item) => {
  return item === "the";
});
//  console.log(theoccu.length);

//2)reverse string
//approach 1
let str1 = "lokeshjawale";

let strSplit = str1.split("");
console.log(strSplit);
let reverseStrSplitted = strSplit.reverse();
console.log(reverseStrSplitted.join(""));

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//approach 2
let str2 = "akshayphargade";
let opt = "";

function reverseStr(str1) {
  for (let i = str1.length - 1; i >= 0; i--) {
    opt += str1[i];
  }
  return opt;
}

console.log(reverseStr(str2));

//3)palidrome string

// function isPalidrome(str){

//   let str2 = str.toString().split('').reverse().join('');
//   console.log(str2)
//   if(str.toString()===str2){
//     return true;
//   }
//   else{
//     return false;
//   }

//   }
// console.log(isPalidrome("abcfdcba"));
// console.log(isPalidrome("abccba"));
// console.log(isPalidrome(12398721));

function checkPalidrome(str1) {
  let opt = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    opt += str1[i];
  }
  if (opt === str1) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalidrome('madaam'));
console.log(checkPalidrome('madam'))



//1) create function like thatbwhich accepts two numbers and
//if the sum of them are less than 15 then return that number
//or if there sum is greater than 15 then return remainder after dividing that sum with 15

function check(a, b) {
  if (a + b < 15) {
    return a + b;
  } else {
    let remainder;
    remainder = (a + b) % 15;
    return remainder;
  }
}
// console.log(check(12,24));
// console.log(check(7,5));

//////////////////////////////////////////////////////////////

//2 palidrome program
function checkPalindromeNumber(number) {
  let remainder,
    temp,
    reversedNumber = 0;
  temp = number; //temp =121

  // our reverse logic for numbers
  while (number > 0) {
    //true
    remainder = number % 10;
    number = parseInt(number / 10);
    reversedNumber = reversedNumber * 10 + remainder;
  }
  console.log(reversedNumber);
  //check whether the number is palindrome
  if (reversedNumber == temp) {
    console.log("The given number is Palindrome");
  } else {
    console.log("The given number is not palindrome");
  }
}

console.log(checkPalindromeNumber(12321));
//////////////////////////////////////////////////////////////
//3 Prime  number checking

function isPrime(num) {
  let isPrimeNum = true;
  if (num === 1) {
    console.log("number is not prime nor composite number");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrimeNum = false;
        break;
      }
    }
  }
  if (isPrimeNum) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is a not prime number`);
  }
}

console.log(isPrime(3));
console.log(isPrime(12));
console.log(isPrime(97));

//////////////////////////////////////////////////////////////////////
//4 concentrate arrays and return ascending as well as descending array

let arr11 = [1,4,7,10];
let arr22 =[2,5,8,11];
let arr33 =[3,6,9];
let arr4 = [...arr11,...arr22,...arr33];
console.log(arr4);

function sort(arr){
  let temp = false;
  while(!temp){
      temp = true;
      for(let i = 1; i < arr.length ; i++){
          if(arr[i-1] > arr[i]){
              temp =false;
              let abc=arr[i-1];
              arr[i-1] = arr[i];
              arr[i] =abc;
          }
      }
  }
  return arr;

}
console.log(sort(arr4));

function reverseSort(arr){
  let result =[];
  for(let i= arr.length;i >=0;i--){
    result.push(i);
  }
  return result;
}
console.log(reverseSort(arr4));

//////////////////////////////////////////////////////////////////////
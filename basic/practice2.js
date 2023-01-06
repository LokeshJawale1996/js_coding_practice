const prompt = require("prompt-sync")({ signint: true });

// console.log(prompt("Enter you name"))
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(string);

// let arr1 =[];
// arr1[0] = prompt('Enter num1 of arr1');
// arr1[1] = prompt('Enter num2 of arr1');
// arr1[2] = prompt('Enter num3 of arr1');
// arr1[3] = prompt('Enter num4 of arr1');
// num1 = parseInt(arr1[0]);
// num2 = parseInt(arr1[1]);
// num3 = parseInt(arr1[2]);
// num4 = parseInt(arr1[3]);
// arr1 =[num1,num2,num3,num4];

// console.log(arr1)

// let arr2 =[];
// arr2[0] = prompt('Enter n1 of arr2');
// arr2[1] = prompt('Enter n2 of arr2');
// arr2[2] = prompt('Enter n3 of arr2');
// arr2[3] = prompt('Enter n4 of arr2');
// num5 = parseInt(arr2[0]);
// num6 = parseInt(arr2[1]);
// num7 = parseInt(arr2[2]);
// num8 = parseInt(arr2[3]);
// arr2 =[num4,num5,num7,num8];

// console.log(arr2)

// let arr3 =[];
// arr3[0] = prompt('Enter no1 of arr3');
// arr3[1] = prompt('Enter no2 of arr3');
// arr3[2] = prompt('Enter no3 of arr3');
// num9 = parseInt(arr2[0]);
// num10 = parseInt(arr2[1]);
// num11 = parseInt(arr2[2]);
// arr3 =[num9,num10,num11];

// console.log(arr3);


// let arr4 = [...arr1,...arr2,...arr3];
// console.log(arr4);

// function sort(arr){
//   let temp = false;
//   while(!temp){
//       temp = true;
//       for(let i = 1; i < arr.length ; i++){
//           if(arr[i-1] > arr[i]){
//               temp =false;
//               let abc=arr[i-1];
//               arr[i-1] = arr[i];
//               arr[i] =abc;
//           }
//       }
//   }
//   return arr;

// }
// console.log(sort(arr4));

// function reverseSort(arr){
//   let result =[];
//   for(let i= arr.length;i >=0;i--){
//     result.push(i);
//   }
//   return result;
// }
// console.log(reverseSort(arr4));


////////////////////////////////////////////////////////////////////
let n1 = prompt("Enter lengh of array1")
let ar1 =[]

for(let i =0; i<n1;i++){
    let bg = parseInt(prompt("Enter element of Array1: "))
    ar1.push(bg)
}
console.log(ar1);

let n2 = prompt("Enter lengh of array2 ")
let ar2 =[]

for(let i =0; i<n2;i++){
    let bg = parseInt(prompt("Enter element of Array2: "))
    ar2.push(bg)
}
console.log(ar2)

let n3 = prompt("Enter lengh of array3 ")
let ar3 =[]

for(let i =0; i<n3;i++){
    let bg = parseInt(prompt("Enter element of Array3: "))
    ar1.push(bg)
}
console.log(ar3)

// // let arr1=[1,4,7,10];
// // let arr2=[2,5,8,11];
// // let arr3=[3,6,9];
// let newArr=[];
// for(let i=0; i< ar1.length+ar2.length+ar3.length; i++){

//    newArr.push(ar1[i]);
//    newArr.push(ar2[i]);
//    newArr.push(ar3[i]);
   
// }
// newArr.pop()
// console.log(newArr)

let ar4 = [...ar1,...ar2,...ar3];

function sort2(arr){
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
console.log(sort2(ar4));


// function reverseSort2(arr){
//   let result =[];
//   for(let i= arr.length;i >=0;i--){
//     result.push(i);
//   }
//   return result;
// }
// console.log(reverseSort2(ar4));













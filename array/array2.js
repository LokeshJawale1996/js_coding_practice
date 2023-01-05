//1 prime number sum from array
let ar = [11,11,10,14,78,45,43,97,98];

function primeNumSum(arr){
    let sum = 0;
 for(let i of arr){
    if(i % 2 !=0 && i % 3 !=0 && i % 5 !=0 && i % 7 !=0 ){
       sum +=i;
    }
 }
 return sum;
}

// console.log(primeNumSum(ar));

//2csum of perfect cubes from array
let ar1 =[2,9,12,16,81,216,264,625,8,343];

function sumOfCubes(ar){
    let sum = 0;
    for(let i of ar){
        if(Number.isInteger(Math.cbrt(i))){
            sum+=i;

        }

    }
    return sum;
}

//console.log(sumOfCubes(ar1));//567

//3 staircase
function staircase(n) {
    // Write your code here
    for(let i = n; i <= 1; i--){
        console.log("#");
    }

}

// console.log(staircase(5));

//4 remove duplicates from array

let arr1 = [2,3,4,3,6,7,4];
//1 Using set
let uniqueElements = new Set(arr1);
console.log(uniqueElements);

//2 Using filter method
function removceDuplicatesUsingFilter(arr1){
 return arr1.filter((item,
    index) => arr1.indexOf(item) === index)
}
console.log(removceDuplicatesUsingFilter(arr1));

//3. Using For loop withou inbuilt method
function unique(arr) {
    const result = [];
  
    for (let i of arr) {
      let noRepeat = true;
  
      for (let j of result) {
        if (i === j) {
          noRepeat = false;
          break;
        }
      }
  
      if (noRepeat) {
        result.push(i);
      }
    }
  
    return result;
  }
  
  // 🎉  [ 1, 3, 2 ]
  console.log(unique([1, 1, 3, 2, 2]));
  

  //4 sorting elements without using sort method or inbuiilt method
  numbers =[12,10,15,11,14,13,16];

  //approach 1
  function bubbleSort(arr){
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
  console.log(bubbleSort(numbers));

//approach 2 using binbuilt method

function sorting(arr){
    // return arr.sort();
    return arr.reduce((a,b) => a-b)
}
console.log(numbers);
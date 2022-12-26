function miniMaxSum(arr) {
    // Write your code here
arr.sort();
let minSum = 0;
let maxSum =0;
for(let i =0; i <= arr.length-2;i++){
    minSum+=arr[i];
    
}
for(let i =arr.length -1; i >=1;i--){
      maxSum +=arr[i];  
}
console.log(minSum,maxSum);
}
let arr1=[1,3,5,7,9]

console.log(miniMaxSum(arr1))
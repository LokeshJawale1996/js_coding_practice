function diagonalDifference(arr) {
    // Write your code here
    let a=0,b=0,c=arr.length-1,sum1=0,sum2=0;
    let sum3=0;
    
    for(a,c,b;a <arr.length;a++,b++,c--){
        sum1 += arr[a][b];
        sum2 += arr[a][c];
    }
            console.log(sum1)

    sum3 = Math.abs(sum1 -sum2);
 return sum3;
}
// let arr1= [
//     [3],
//     [11,2,4],
//     [4,5,6],
//     [10,8,-12]
// ]
// console.log(diagonalDifference(arr1))
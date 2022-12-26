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

//sum of perfect cubes from array
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
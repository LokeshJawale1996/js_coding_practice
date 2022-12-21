// 1)Unique elements from aray after removing duplicates
let arr = [1, 2, 3, 4, 5, 6, 1, 2, 4, 6, 7, 8, 9, 1, 2];
// console.log(arr);

let uniq = arr.filter((v1) => {
  return (
    arr.filter((v2) => {
      return v1 == v2;
    }).length == 1
  );
});

// console.log(uniq)



//2)  find sum 10 pair
let ar1 = [2, 3, 4, 5, 6];
let ar2 = [8, 7, 8, 9, 4];

// for(let i = 0;i < ar1.length;i++){
//     for(let j = 0;j < ar2.length;j++){

//         if(ar1[i] + ar2[j] === 10){
//         console.log("sum 10 pair" , ar1[i],ar2[j]);
//         }
//     }
// }

//3)find element with start with k or
let findSpecific = [
  "akshay",
  "dhanaji",
  "kaushal",
  "ajinkya",
  "lokesh",
  "messi",
  "ronaldo",
  "bhumi",
];
let result = [];
for (let i = 0; i < findSpecific.length; i++) {
  if (findSpecific[i].startsWith("l") || findSpecific[i].startsWith("k")) {
    result.push(findSpecific[i]);
  }
}
// console.log(result);

//4)reduce function in array
let arrReduce = [51600, 51667, 45500, 45333, 54000, 55000];
const sumSalary = arrReduce.reduce((acc, val) => {
  return acc + val;
});
// console.log(sumSalary);

//5 check each salary is below 60k(every= checks condition on each element of array)
const salCheck = arrReduce.every((a1) => {
  return a1 < 60000;
});
// console.log(salCheck);

//6 some method in array(some = checks condition on at least one element of array)
// console.log([2, 5, 8, 1, 9].some((x) => x > 10)); // false
// console.log([12, 5, 8, 1, 4].some((x) => x > 10)); // true

//7) find the pair after sum which are perfect squares
let a1 = [2,4,6,8,10,12];
let a2 = [10,13,7,45,15];
for(let a in a1){
    for(let b in a2){
        let c = Math.sqrt(a1[a] + a2[b])
        if(Number.isInteger(c)){
          // console.log(a1[a], " and ",a2[b])
        }
    }
}

//8 pattern acc occurence
let longStr ='abhdjacchjdjadcacchdhhacchtyasdfacc';
let desiredRegex = /acc/g
let result1 =longStr.match(desiredRegex);
console.log(result1.length)

/////////////////////////////1///////////////////////////

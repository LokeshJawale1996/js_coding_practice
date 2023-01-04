function birthdayCakeCandles(candles) {
  let count = 0;
  let max = candles.sort((a, b) => a - b)[candles.length - 1];
  // console.log(max);
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }
  return count;
}

let array = [1,3,2,1,3,2,3,2,2,2,2,2,2,3];
console.log(birthdayCakeCandles(array));


//how to find largest element from array
//approach
let arr=[12,45,34,45,67,78,23,78];
let maximum = arr.sort((a,b) => a-b)[arr.length-1];
console.log(maximum);
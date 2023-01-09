function hurdleRace(k, height) {
    // Write your code here
let max = Math.max.apply(null, height);
console.log(max)
    return max > k ? max - k : 0;
}
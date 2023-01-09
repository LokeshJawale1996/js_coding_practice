function beautifulDays(i, j, k) {
    // Write your code here
    let count =0;
    for(let a =i;a <= j;a++){
        let rev=a.toString().split('').reverse().join('')
        let check =parseInt(rev);
        if(Math.abs(a-check) % k ===0){
             count++;
        }
    }
    return count

}

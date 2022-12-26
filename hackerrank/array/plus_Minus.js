function plusMinus(arr) {
    // Write your code here
    let l = arr.length;
    let p=0;
    let n =0;
    let zero =0;
    for(let i of arr){
        if(i > 0){
            p+=1;
        }
        else if(i < 0)
        {
            n+=1;
            
        }else{
            zero+=1;
        }
    }
    
    p = (p/l).toFixed(6);
    n = (n /l).toFixed(6);
    zero = (zero/l).toFixed(6);
    console.log(p);
    console.log(n);
    console.log(zero);

}
let ar1= [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(ar1))

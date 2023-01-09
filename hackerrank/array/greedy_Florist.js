function getMinimumCost(k, c) {
    //sorting the all elements
    c.sort((a,b)=>a>b?-1:1)
    let result = 0
    let a = k
    let t = 0
    for(let i = 0;i<c.length;i++){
        if(i<k){
            result+=c[i]
        }
        else{
           if(i==a){
               t++
               a = i+k
           }
           let x = c[i]*(t+1)
           result+=x
        }
    }
    return result;



}

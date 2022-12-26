function matchingStrings(strings, queries) {
    // Write your code here
    let a=0;
    let b=[]
    for(let i of queries){
       
        a=0
        for(let j of strings){
                if(i === j)
                {
                    a +=1
                }
        }
         b.push(a)
    }
    
    return b;

}
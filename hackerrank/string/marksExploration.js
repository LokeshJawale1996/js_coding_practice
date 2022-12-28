function marsExploration(s) {
    // Write your code here
    let subStr = s.split('');
    let count1=0;
    
    console.log(subStr);
    for(let i = 0;i <subStr.length;++i){
        
        if(subStr[i] !=='S' && subStr[i] !=='O' ){
            console.log(i);
            count1++;
        }
            }
    return count1;

}

//5/12 cases are failed out of 12
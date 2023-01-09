function compareTriplets(a, b) {
    let bScore = 0;
    let aScore = 0;
    let result =[];
    for(let i = 0; i < a.length; i++){
        var aProblem = parseInt(a[i]);
        var bProblem = parseInt(b[i]);
        if (aProblem > bProblem) {
            aScore++;
        }
        else if (bProblem > aProblem) {
            bScore++;
        }
        
    }
    result.unshift(bScore);
    result.unshift(aScore);
    
    // console.log(`${aScore} ${bScore}`);
    return result;


}

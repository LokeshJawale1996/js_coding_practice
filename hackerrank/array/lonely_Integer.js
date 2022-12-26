
function lonelyinteger(a) {
    // Write your code here
let uniqarr=[]
  let u=0;
  for(let i of a){
      for(let j of a)
      {
          if(i === j){
              u +=1
              
          }
      }
      if(u ===1){
          uniqarr.push(i)
      }
      u=0
  }
  return uniqarr;
}

let ar1= [1,2,3,4,3,2,1]
console.log(lonelyinteger(ar1))
//diagonal sum check equal or not

let abc = [
    [1, 2, 3, 1],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [10, 6, 7, 10],
  ];
  
  let i=0,j=0,k;firstSum=0,secondSum=0;
  
  k = abc.length-1;
  
   for(i,j,k;i<abc.length;i++,j++,k--){
      firstSum = firstSum + abc[i][j];
      secondSum = secondSum + abc[k][i];
      
  }
  if(firstSum === secondSum){
      console.log("diagonal sum are equal");
  }else{
      console.log("diagonal sum are not equal");
  }
  
  //check 1st elment and last element sum overall sum are equal or not from 2d array;
  
  let abcd = [
      [2, 2, 3, 5],
      [5, 6, 7, 8],
      [1, 2, 3, 4],
      [10, 6, 7, 1],
    ];
    
    let a=0,b=0,c=abcd.length-1,d=0,sum1=0,sum2=0;
    for(a,c,b;a<abcd.length;a++){
      sum1 += abcd[a][b];
      sum2 += abcd[a][c]
    }
    console.log(sum1,sum2)
  
    if(sum1 === sum2){
      console.log("sum are equal");
  }else{
      console.log("sum are not equal");
  }
  
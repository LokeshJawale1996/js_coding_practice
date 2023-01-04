function gradingStudents(grades) {
    
    let newGrades=[];
        let a=0,b=0;
        for(let i =0;i< grades.length;i++){
            a =Math.ceil(grades[i] / 5) * 5;
            b =a-grades[i]
            
          if(grades[i] >=38 && b <= 2 ){
          newGrades.push(grades[i] + b)
          }
          else{
              newGrades.push(grades[i])
          }
       
   }
   return newGrades;
   }

let arr = [73,67,38,33];
console.log(gradingStudents(arr));
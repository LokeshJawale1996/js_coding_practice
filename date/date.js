// let date = new Date();
// console.log(date);
// let year,month,day;
// year = date.getFullYear();
// month = date.getMonth();
// day = date.getDay();
// // console.log(year,month,day);

// console.log(date.toLocaleDateString());
// // 22/12/2022
// console.log(date.toLocaleTimeString());
// //10:50:06 am

//////////////////////////////////////////////
//1) GO to back from particular days and get date

function getPreviousDate(date = new Date(),days) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - days);
  
    return previous.toLocaleDateString();
  }


// console.log(getPreviousDate(new Date(),0));
///////////////////////////////////////////

//2) GO to back from current date to any particular days back

function getBackFromCurrentDate(days){
    let date = new Date();
    date.setDate(date.getDate() - days);
    return date.toLocaleDateString();
}
// console.log(getBackFromCurrentDate(10));

///////////////////////////////////////////////
//3) age calculator function

function _calculateAge(birthday = new Date()) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    return ageDate;
}
console.log(_calculateAge(new Date("11-24-1968")));
// console.log(Date.now());
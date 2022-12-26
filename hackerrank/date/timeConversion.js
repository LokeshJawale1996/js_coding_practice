function timeConversion(s) {
    // Write your code here
    let str3;
let str1 =s.slice(-2);
let str2 =s.slice(0,s.length-2);
 if(str1 === 'PM' && str2.slice(0,2) != "12"){
   
     str3=str2.slice(0,2);
     str3 = Number(str3);
     str3 = str3 + 12;
     str3 = str3+ str2.slice(2)
     return str3.toString();
 }
 else if(str2.slice(0,2) === "12" && str1==="AM"){
   str3=str2.slice(0,2);
     str3 = "00";
     str3 = str3+ str2.slice(2)
   
     return str3.toString();

 }
 else if(str2.slice(0,2) === "12" && str1==="PM")
 {
    //   str3=str2.slice(0,2);
    //  str3 = "12";
    //  str3 = (str3+ str2.slice(2)).toString()
     
     return str2;
 }
 else{
     return str2;
 }


}

console.log(timeConversion('12:00:00PM'))

//https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
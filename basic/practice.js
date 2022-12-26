//1) create function like thatbwhich accepts two numbers and 
//if the sum of them are less than 15 then return that number
//or if there sum is greater than 15 then return remainder after dividing that sum with 15

function check(a,b){
    if(a+b < 15){
        return a+b;

    }else{
        let remainder;
        remainder = (a + b ) % 15;
        return remainder;
    }
}
console.log(check(12,24));
console.log(check(7,5));
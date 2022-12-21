//REGEX

const regex1 = /[0-9]{10}/g.exec("9766603565fdsfhsfgnd");

//1) mobile number have only 10 length
//test
const regex2 = /[0-9]{10}/g;
let text = "9766603565";
let output = regex2.test(text);
// console.log(output);

//2) email address
const emailRegex = /([a-zA-Z]{3,15}\@[a-z]{2,5}\.[a-z]{2,5}){9,27}/g;
let testEmail = "Lok@gm.co";
let output2 = emailRegex.test(testEmail);
// console.log(output2);

//3)name start With a-dA-D ends with W-Zw-z total min length is 4
// /(^[A-Da-d]{1,3})(.{2,4})([w-zW-Z]{1,3}$)/g

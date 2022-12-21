//1)find the length of the occures in the string.
let str = "Hi a am the aki loki an the a after then a see how work the";
let count = 0;
let strSpli = str.split(" ");
let mm = [];
let theoccu = strSpli.filter((item) => {
  return item === "the";
});
//  console.log(theoccu.length);
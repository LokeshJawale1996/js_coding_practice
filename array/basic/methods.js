// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let years = [2019,2020,2021,2022,2023,1996,1990,1960,1947,1934];
let years2= [1999,1200]
console.log(years.length);

//1)concat (The concat() method concatenates (joins) two or more arrays.)
let comboYears=years.concat(years2);
console.log(comboYears);

//2)constructor
// The constructor property returns the function that created the Array prototype.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;

//3)every
// every() returns true if all elements in an array pass a test (provided as a function)

function checkYear(year) {
   return year > 2000;
}

let check = years.every(checkYear);
console.log(check);//false

//4)fill
// The fill() method fills specified elements in an array with a value.
fruits.fill('Kiwi',2,4);
console.log(fruits);//[ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]

//5 filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.
let resultYears = years.filter(checkYear)
console.log(resultYears);//[ 2019, 2020, 2021, 2022, 2023 ]



//6)find
// The find() method returns the value of the first element that passes a test.

//7)forEach
// The forEach() method calls a function for each element in an array.
let numbers = [2,3,4];
function square(item,index,arr){
    arr[index]= item *item
}
numbers.forEach(square);
console.log(numbers);
//[ 4, 9, 16 ]



//8) Array.from
// The Array.from() method returns an array from any iterable object.

let str='ABCDEFGHI'
let splitStr = Array.from(str);
console.log(splitStr);
// [
//   'A', 'B', 'C',
//   'D', 'E', 'F',
//   'G', 'H', 'I'
// ]

//9) includes
// The includes() method returns true OR false if an array contains a specified value or not accordingly.

let animals = ['tiger','lion','elephant','horse'];
let resultAnimals = animals.includes('tiger');
let resultAnimals2 = animals.includes('monkey');

console.log(resultAnimals,resultAnimals2);

//10)indexOf() 
// It returns the position of a specified value in an array
console.log(animals.indexOf('horse'));//3

//11) isArray() 
// method returns true if an object is an array, otherwise false.
let no = 23;
console.log(Array.isArray(animals));//true
console.log(Array.isArray(no));//false

//12) join()
// The join() method returns an array as a string.
let resultJoin = animals.join(' and ');
console.log(resultJoin);//tiger and lion and elephant and horse

//13 map()
// map() creates a new array from calling a function for every array element.
// let numbers = [2,3,4];
//example 1
function cubeNumbers(item){
    return item * item * item
}
let resultMap = numbers.map(cubeNumbers);
console.log(resultMap);//[ 64, 729, 4096 ]

//14 push()
//add element at the end of array
// let numbers = [4,9,16];
numbers.push(3);
console.log(numbers);//[ 4, 9, 16, 3 ]

//15)pop
//remove last element of array
// let numbers = [4,9,16];
numbers.pop();
console.log(numbers);//[ 4, 9, 16 ]


//16 unshift
//add element at the start of array
numbers.unshift(12);
console.log(numbers);//[ 12, 4, 9, 16 ]

//16 shift
//removes element at the start of array
numbers.shift();
console.log(numbers);//[  4, 9, 16 ];

//17 sort reverse
//sort the elements of array
//reverse the elements of array
console.log(animals.sort());//[ 'elephant', 'horse', 'lion', 'tiger' ]
console.log(animals.reverse());//[ 'tiger', 'lion', 'horse', 'elephant' ]

//18 slice
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

let sliceEl = [2,3,4,5,6];
console.log(sliceEl.slice(1));//[ 3, 4, 5, 6 ]
console.log(sliceEl.slice(-1));//[6]
console.log(sliceEl.slice(0,3));//[2,3,4]

//19 reduce
let resultReduceSum = sliceEl.reduce(sum,0)

function sum(total,num){
   return total += num
}
console.log(resultReduceSum)

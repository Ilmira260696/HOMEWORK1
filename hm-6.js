//Задание1 

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++){
    console.log(numbs[i])
    if (numbs[i] == 10) {
        break;
    }
}

//Задание 2

const values = [1, 5, 4, 10, 0, 3];
console.log (values.indexOf(4));


//Задание 3

let numbers = [ 1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log (numbers);

//Задание 4

const arr = [[1,2,3,],[4,5,6]];
const newArr = [...arr[0], ...arr[1]];
console.log (newArr);


//Задание 5

let elements = [1, 1, 1];
elements.push (2,2,2);
console.log (elements);

//Задание 6

let el = [9, 8, 7, 'a', 6, 5];
el = el.sort ();
console.log (el.pop());
console.log (el);

//Задание 7
7
let question= Number (prompt ('Введите любое число'));
const value = [9, 8, 7, 6, 5];
let search = value.includes (question);
console.log (search);

// Задание 8

const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);


//Задание 9
  
let arrea = [
    [1, 2, 3],
    [4, 5, 6],
    ]; 
   let results = arrea.reduce(function(a, b) {
    return a.concat(b);
    }); 
   console.log (results);

//Задание 10

const meaning = [3,5,6,7,8];
for (j= 0; j < meaning.length-1; j++) {
    console.log(meaning[j]+meaning[j+1]);
}

// Задание 11
  
  const square = [2, 4, 6, 8];
  let result = square.map (num =>(num**2));
  console.log (result);

//Задание 12
  
function getLengthWords (arr) {
    return arr.map (str => (str.length));
    }
 console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
  
 //Задание 13

 function filterPositive(array) {
    return array.filter (el=>el<0);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2]);
  console.log (filterPositive([-1, 0, 5, -10, 56]));
  console.log (filterPositive([-25, 25, 0, -1000, -2])) ;
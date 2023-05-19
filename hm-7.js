//Задание 1 

let str = 'js';
str = str.toUpperCase();
console.log (str);

//Задание 2

function searchStart (arr,Value) {
return arr.filter((words)=>words.toLowerCase().startsWith(Value.toLowerCase()));
}
console.log (searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log (searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 

// Задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задание 4


console.log (Math.max(52, 53, 49, 77, 21, 32));
console.log (Math.min(52, 53, 49, 77, 21, 32));

// Задание 5

function get (min, max) {
	return Math.round(Math.random() * (max - min)+min);
  }
  console.log (get(1,10));

  // Задание 6

  function getRandomArrNumbers (number) {
    const arrayRound = [];
    let lengthNumber = Math.round((number/2));
    for (let i=0; i<lengthNumber; i++) {
    arrayRound.push(Math.round(Math.random()*number));
    }
    console.log (arrayRound);
  }
     getRandomArrNumbers (7)  ;
     

 
// Задание 7

function get (min, max) {
	return Math.round(Math.random() * (max - min)+min);
  }
  console.log (get(5,15));


  //  Задание 8

  // let currenetDate = new Date();
  // console.log (currenetDate);

  //  Задание 9

  // let myDate = new Date();
  // myDate = new Date(myDate.getTime());
  // myDate.setDate(myDate.getDate() + 73); 
  // console.log (myDate);

//  Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); 
let fullDate =  myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() +"-это " + days[myDate.getDay()]+"."+ "Время-"+myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds(); 
console.log(fullDate); 




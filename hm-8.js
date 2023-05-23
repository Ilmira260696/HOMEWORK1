

// //const fibonacci = [1, 1, 2, 3, 5, 8];

// const multipleByTwoFib = fibonacci.map((number) => number * 2);
// const plusTenFib = fibonacci.map((number) => number + 10);
// const onlyBigFib = fibonacci.filter((number) => number > 3);

// console.log(multipleByTwoFib);
// console.log(plusTenFib); 
// console.log(onlyBigFib);



// function callbackWithArrayLength(arr, callback) {
//     callback(arr.length);
//   }
  
//   callbackWithArrayLength([1], (length) => {
//     console.log(length);
//   });
  
//   callbackWithArrayLength([1, 1], (len) => {
//     console.log(len);
//   });
//   callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//     console.log(l);
//   });
 
// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));
 // код выше должен вывеcти =>
 // [
 //  { name: 'Олег', age: 7 },
 //  { name: 'Анна', age: 17 },
 //  { name: 'Глеб', age: 29 },
 //  { name: 'Оксана', age: 47 }
 // ]
 //console.log(people.sort((a, b) => a.name.localeCompare(b.name)));

 // Задание 2

 function isPositive(number) {
   if (number>0){
    return number;
   }
    }
    function isMale(info) {
   if (info.gender=='male') {
    return info;
   }
    }
    function filter(arr, callback) {
for (let i=0; i<arr.length; i++) {
    return arr.filter(callback);
}
    }
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
     const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задание 3

// function TimeIsUp () {
//     let currenetDate = new Date();
// }
// let timerId = setInterval(() => console.log (new Date()), 3000);
// setTimeout(() => { clearInterval(timerId); 
//     console.log ('30 секунд прошло'); }, 30000);

    // Задание 4

//     function delayForSecond(callback) {
//         setTimeout(callback, 1000);
//    }
//    delayForSecond(function () {
//       console.log('Привет, Глеб!');
//    })


  //Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));


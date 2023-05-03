let i=0;
while (i<2) {
    alert('Привет!');
    i++;   
}

let a=1;
do {
    console.log(a);
    a++;  
} while (a<6);

let b=7;
do {console.log(b);
    b++;   
} while (b<23);

const obj={
    'Коля':200,
    'Вася':300,
    'Петя':400
}

for (const key in obj) {
    console.log(`${key}-зарплата ${obj[key]}$`);
}
// Задание 5
let n=1000;
num=0;
for (; n>=50; num++) {
    n=n/2;
    console.log(n);
}
console.log("Количество интераций ="+num);

// Задание 6
let numberFriday=5;
for (;  numberFriday<=31;  numberFriday +=7) {
    console.log (`Сегодня пятница, ${numberFriday}-е число. Необходимо подготовить отчёт.`)
}

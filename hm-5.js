//задание 1
function comprasion (a, b) {
    if (a<b) alert (a);
    else { alert (b);
    }
}
comprasion (4, 6);
comprasion (10, 2);

//задание 2

function calcEvenOddnumber(evenOddnumber) {
    if (!isNaN(evenOddnumber)) {
        if (evenOddnumber % 2) {
            return 'Число нечетное';
        } else {
            return 'Число четное';
        }

    } else {
        return 'Вы ввели не числовое значение';
    }
}

console.log(calcEvenOddnumber(Number(prompt('Пожалуйста, введите любое число'))));
calcEvenOddnumber (5,4);
//задание 3

    function square(x) {
        console.log (x**2);  
    }
    square (9);

    function reclamation(y) {
        return y**2;    
    }
    let result = reclamation(7);
    alert(result);

//задание 4

function userAnswer () {
    let age= prompt ('Сколько вам лет?');
    if (age<0) {
    alert('Вы ввели неправильное значение');
    }
    if (age>=0 && age<=12) {
        alert('Привет, друг!');
     }
     if (age>=13) {
        alert('Добро пожаловать!');
     }
    }
    userAnswer(5);

//задание 5

function check(d,c) {
    if (isNaN(d) || isNaN(c)) {
        alert ('Одно или оба значения не являются числом');
    }
    else {
        return d*c;
    }
}
check(5,9);

//задание 6

function input() {
    let numeral= prompt ('Введите любое число');
    if (isNaN(numeral)) {
        alert ('Переданный параметр не является числом');    
    }
    else {
        alert (`${numeral} в кубе равняется ${numeral**3}`);
    }
}
input();

//задание7

const circle1= {
    radius:20,
    getArea() {
        return Math.PI*this.radius**2;
    },
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }
}
console.log (circle1.getArea());
console.log (circle1.getPerimeter());

const circle2= {
    radius:40,
    getArea() {
        return Math.PI*this.radius**2;
    },
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }
}
console.log (circle2.getArea());
console.log (circle2.getPerimeter());


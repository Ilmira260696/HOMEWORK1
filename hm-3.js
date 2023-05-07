let password=prompt('Введите пароль');
if(password==='Ильмира') {alert('Пароль введен верно');
                         }else{alert('Пароль введен неверно');
                        }

let c=5;
if (c>0 && c<10) {alert('Верно');
} else {alert('Неверно');
}
let d=15;
let e=20;
if (d>100 || e>100) {
    alert('Верно');
} else {alert('Неверно');
}

let a='2';
let b='3';
alert(Number(a)+Number(b));


let month=Number(prompt('Введите номер месяца в году'));
switch (month) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:            
        console.log('Весна');
         break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
                break;
    case 9:
    case 10:
    case 11:
            console.log('Осень');
                break;
    
    default: console.log('номер месяца больше 12');
        break;
}
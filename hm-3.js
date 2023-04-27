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
if (d>100 || e>100) {alert('Верно');
}else {alert('Неверно');
}

let a='2';
let b='3';
alert(Number(a)+Number(b));


let month=Number(prompt('Введите номер месяца в году'));
switch (month) {
    case 1:
        console.log('Зима');
         break;
    case 2:
         console.log('Зима');
            break;
    case 3:
        console.log('Весна');
         break;
     case 4:
        console.log('Весна');
         break;
    case 5:
        console.log('Весна');
         break;
    case 6:
            console.log('Лето');
             break;
    case 7:
            console.log('Лето');
                break;
    case 8:
             console.log('Лето');
                break;
    case 9:
            console.log('Осень');
                break;
     case 10:
            console.log('Осень');
                 break;
    case 11:
            console.log('Осень');
                break;
    case 12:
            console.log('Зима');
                 break;
    default: console.log('номер месяца больше 12');
        break;
}
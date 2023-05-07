

function year () {
    let month=Number(prompt('Введите номер месяца в году')); 
    if (month===12 || month===1 || month===2) {
        alert ('Зима');   
    }
    if (month===3 || month===4 || month===5) {
        alert ('Весна');   
    }
    if (month===6 || month===7 || month===8) {
        alert ('Лето');   
    }
    if (month===9 || month===10 || month===11) {
        alert ('Осень');   
    }
    else if (isNaN(month) || month>12) {
        alert ('Введите число от 1 до 12');
    }
    }
   
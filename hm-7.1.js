function fruits () {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert (words);
    let answer1 = prompt ('Чему равнялся первый элемент массива?');
    let answer2 = prompt ('Чему равнялся последний элемент массива?');
    if (answer1.toLowerCase()==words[0].toLowerCase() && answer2.toLowerCase()==words[6].toLowerCase()) {
        alert ('Поздравляем! Вы угадали!');
    } else
    if (answer1.toLowerCase()==words[0].toLowerCase() || answer2.toLowerCase()==words[6].toLowerCase()) {
        alert ('Вы были близки к победе!');
    }
    else {
        alert ('Ответы неверны!');
    }
}
fruits();
// Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.

// Если вхождений не найдено, должно быть возвращено число 0.

function strCount(str, letter){  
    return str.split(letter).length-1
  }
  strCount("Hello", "o");
  strCount("Hello", "l");
  strCount("Hello", "z");


//  Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.

function findAverage(array) {
  if (array.length === 0) {
  return 0;
  } else {
      return (array.reduce((a, b) => (a + b))) / (array.length);
            
  }
}
console.log(findAverage ([2,4,6,8]));


// Вам пришло сообщение WhatsApp с неизвестного номера. Может быть, это от той девочки/мальчика с иностранным акцентом, с которой вы познакомились вчера вечером?
// Напишите простую функцию, проверяющую, содержит ли строка слово «привет» на разных языках.

function validateHello(greetings) {
  let words = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  for(word of words) {
    if(greetings.toLowerCase().includes(word)) {
      return true
    }
  }
  return false
}
validateHello ("hello");


// Две строки легко соединить вместе, например строку1 + строку2.
// Другой способ получить желаемый результат - использовать string1.concat(string2)
// ES6 представил еще один способ соединения строк. Ваша задача — выяснить, что это такое, и написать функцию, которая будет складывать две строки вместе, между двумя строками должен быть пробел.
// + , .concat() и .join() не разрешены в этом упражнении. Я также удалил некоторые другие методы, которые можно использовать для обмана!
// Если один из аргументов является числом, ваш код должен преобразовать его в строку.
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}


// Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.

const str = "john McClane";
const reverse = str.split(" ").reverse().join(" ");
console.log(reverse);

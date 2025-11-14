const isNormalLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

const isPolyndrom = function(word) {
  word = word.replaceAll(' ', '').toLowerCase();
  if (word === word.split('').reverse().join('')) {
    return true;
  }
  return false;
};

const onlyDigits = function(string) {
  let number = '';
  for (const char of String(string)) {
    if (!isNaN(parseInt(char, 10))) {
      number += char;
    }
  }
  return parseInt(number);
};

// Cтрока короче 20 символов
isNormalLength ('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isNormalLength ('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isNormalLength ('проверяемая строка', 10); // false

// Строка является палиндромом
isPolyndrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolyndrom('ДовОд'); // true
// Это не палиндром
isPolyndrom('Кекс');  // false

onlyDigits('2023 год');            // 2023
onlyDigits('ECMAScript 2022');     // 2022
onlyDigits('1 кефир, 0.5 батона'); // 105
onlyDigits('агент 007');           // 7
onlyDigits('а я томат');           // NaN

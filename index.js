// EXAMPLE 1 - Remove all Quotes from a String in JavaScript

const str = 'hel"l"o wor"l"d';

// ✅ Remove double quotes from a string
const withoutQuotes = str.replaceAll('"', '');
console.log(withoutQuotes); // 👉️ hello world

// // ---------------------------------------------

// // ✅ Remove double and single quotes from a string

// const str2 = 'a"b \'c "d \'e';

// const withoutQuotes2 = str2
//   .replaceAll('"', '')
//   .replaceAll("'", '');
// console.log(withoutQuotes2); // 👉️ ab c d e

// ------------------------------------------------------------------

// // EXAMPLE 2 - Removing only the enclosing quotes from a String

// // ✅ remove only the enclosing double quotes
// let str = '"hello world"';

// if (str.at(0) === '"' && str.at(-1) === '"') {
//   str = str.slice(1, -1);
// }

// console.log(str); // 👉️ hello world

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove all quotes from a String using `String.replace()`

// // ✅ Remove double quotes from a string

// const str = 'hel"l"o wor"l"d';

// const withoutQuotes = str.replace(/"/g, '');
// console.log(withoutQuotes); // 👉️ hello world

// // ---------------------------------------------

// // ✅ Remove double and single quotes from a string

// const str2 = 'a"b \'c "d \'e';

// const withoutQuotes2 = str2.replace(/['"]+/g, '');
// console.log(withoutQuotes2); // 👉️ ab c d e

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the double quotes from a string using `String.split()`

// const str = 'hel"l"o wor"l"d';

// const withoutQuotes = str.split('"').join('');
// console.log(withoutQuotes); // 👉️ hello world

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the double quotes from a string using a `for` loop

// const str = 'hel"l"o wor"l"d';

// let newString = '';

// for (let index = 0; index < str.length; index++) {
//   if (str[index] !== '"') {
//     newString += str[index];
//   }
// }

// console.log(newString); // 👉️ hello world

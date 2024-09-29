/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here

  let vowels = 0;
  let vowelChars = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  for (let x = 0; x < str.length; x++) {
      if (vowelChars.includes(str[x])) {
          vowels++;
      }
  }

  return vowels;
}

module.exports = countVowels;
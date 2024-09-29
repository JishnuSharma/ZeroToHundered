/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length != str2.length) {
      return false;
  }

  const alphabets = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < str1.length; i++) {
      alphabets[str1[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]++;
      alphabets[str2[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < alphabets.length; i++) {
      if (alphabets[i] > 0) {
          return false;
      }
  }

  return true;
}

module.exports = isAnagram;

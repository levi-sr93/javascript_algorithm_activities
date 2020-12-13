const rangeSize = (min, max) => Math.floor(Math.random() * (max - min) + min);


const generateRandomWords = len => {
  let word = '';

  do {
    word += Math.random().toString(36).substring(2)
  } while(word.length < len)

  word = word.substr(0, len);
  return word;

}

let wordsArr = [];

for( let i = 0; i <= 10000 - 1; i++) {
  wordsArr.push(generateRandomWords(rangeSize(3, 6)))
}

console.log('Generated Array: ', wordsArr);

function isPalindrome(word) {
  let palindromeWord = ''
  for(var i = word.length - 1; i >= 0; i--) {
    palindromeWord += word.charAt(i)
  }

  return palindromeWord === word
}

let palindromeArr = []

wordsArr.forEach(word => {
  if (isPalindrome(word)) {
    palindromeArr.push(word)
  }
})

console.log('Quantity of Palindromes: ', palindromeArr.length)
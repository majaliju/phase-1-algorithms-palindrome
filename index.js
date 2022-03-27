function isPalindrome(word) {

  let word = "a"
  console.log("word 'a': ", word)

  wordArray = Array.from(word)
  console.log("wordArray: ", wordArray)

  // establish array2, the backwards array
  const array2 = []
  for (i = (wordArray.length-1); i >= 0; i--){
    array2.push(wordArray[i]);
  }
  console.log("array2: ", array2)

  // this code block down here isn't perfect 
  // this one has errors
  if (wordArray === array2){
    return true
  } 
  else {
    return false
  }
}


/* 
  Add your pseudocode here

  create 2 arrays
      1st array sorts the string from front to back 
      2nd array sorts the string from back to front

  both are for loops, that get the length of the string
      1st one starts from 0 and counts towards string.length,
      2nd one starts from string.length 

  then each array is joined into a string and cross checked 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

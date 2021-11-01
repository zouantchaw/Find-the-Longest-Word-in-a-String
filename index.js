// Return the length of the longest word in the provided sentence

function findLongestWordLength(str) {
  let arr = str.split(" ")
  let longestWord = ""
  console.log(arr)
  arr.forEach(x => {
    if ( x.length > longestWord.length) {
      longestWord = x
    }
  })
  return longestWord.length;
}

// using reduce()
function findLongestWordLength2(str) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}

// using map()
function findLongestWordLength3(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
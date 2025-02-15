// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b){
        return a
    }
    if (a < b){
        return b
    }
    if (a === b){
        return (a || b)
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++){
        if (longestWord.length < words[i].length){
            longestWord = words[i] 
        }
       
    }
    if (words.length === 0){
        return null
    }
    return longestWord  
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}

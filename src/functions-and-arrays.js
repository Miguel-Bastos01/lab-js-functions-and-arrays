// Iteration 1 | Find the Maximum

/* Notes: Very simple function, no loop, if statement etc needed
Simply adding the parameters a and b as place holders, compare the two and return 
whatever the largest is, when equal using the "||" to signify or allows for the return
of one of the other*/
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

/* Very annoying but not too hard: To find the longest word first you must add the desired
array as the parameter in this case "words"*/

function findLongestWord(words) {
    let longestWord = ""; // => To start out, create a variable for longest word with an empty string ""
    for (let i = 0; i < words.length; i++){
        if (longestWord.length < words[i].length){
            longestWord = words[i] 
        } /* => You must loop through each word, in this scenario 
        first: establish the start point i = 0 and when 0 is small than the length of words
        increase
        second: if statement - when the longest word (0) is smaller than the length of the next
        word, you update the word "="*/
       
    }
    if (words.length === 0){
        return null
    } // => Straight forward, when length of word is 0 you return null
    return longestWord  
    /* Always return outside the intial loops to allow for each iteration to be processed before
    returning, returning too early will typically cut the loop short*/
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    
    return total = numbers.reduce((acc, currentValue) => {
        return acc + currentValue
    }, 0) 
}

/* Notes: In this instance the code is simplified but the explanation is as follows
1: first add the array as the parameter in the function
2: When returning the total, the reduce method is used to get the acc (placeholder but we'll say the 
initial value) and current value (Whatever the next number is) then return the acc + currentValue 
(Example, 0 acc + 6 CV = 6, 6 then becomes the new acc + 12 (new current value) = 18 and so on) 
3: Lastly as the initial value is 0 you don't need an if statement to return 0*/




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0
    } // => Simple, when numbers2 is 0 return 0
    let sum = 0
    for (let i = 0; i < numbers2.length; i++){
        sum += numbers2[i]
    } /* => Simple for loop, first you make the loop, add sum variable as baseline to work with
    2: Once the loop is complete {} <= Within add condition, in this case add number to sum
    3: Return the sum / length of number array*/
    return sum / numbers2.length

}

/* A simpler version using the reduce method
function averageNumbers(numbers2) {
    if (numbers2.length === 0) return null; // Handle empty array

    return numbers2.reduce((sum, num) => sum + num, 0) / numbers2.length;
}*/




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, exists) {
    if (arr.length === 0){
        return null
    }
    else if (arr.includes(exists)){
        return true
    }
    else {return false}
} 

// NOTE: PARAMETERS DO NOT NEED TO BE THE SAME NAME AS THE ARRAY JUST HAVE THE RIGHT AMOUNT
// OF 'ITEMS' TO SEND GO THROUGH

/* 
Simplified method via Diep

function doesWordExist(array, thing) {
    if (array.length === 0){
            return null
        }
        else return (array.includes(thing));
    } */

/**--------------------------------------------------------------------
 *                              FUNCTIONS
 --------------------------------------------------------------------*/
//palindrome words verifier fn(x)
function isPalindrome(word){
    for (let i = 0; i < word.length; i++) {
        if(word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}
//even (or odd if false) num verifier fn(x)
function isEven(num){
    return (num % 2 === 0);
}
//random num generator max inclusive function
function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * 
 * @param {*} uPick :user pick, must be true or false
 * @param {*} sum : just a sum between number, must be user number + rand(1,5)
 * @returns true if the sum between uNum and a rand(1,5) is == uPick, even or odd
 */
function getWinner(uPick, sum){
    return (isEven(sum) == uPick);
}

/**--------------------------------------------------------------------
 *                              VARIABLES
 --------------------------------------------------------------------*/
//palindrome variables
const userWordPalindrome = document.querySelector('#palindrome .user-word');
const sendBtnPalindrome = document.querySelector('#palindrome .send');
const resultPalindrome = document.querySelector('#palindrome .result');
//even odd variables
const userPickEvenOdd = document.querySelector('#even-odd .user-pick');
const userNumEvenOdd = document.querySelector('#even-odd .user-num');
const sendBtnEvenOdd = document.querySelector('#even-odd .send');
const resultEvenOdd = document.querySelector('#even-odd .result');

/**--------------------------------------------------------------------
 *                              EVENTS
 --------------------------------------------------------------------*/
//palindrome send btn onclick
sendBtnPalindrome.addEventListener('click', function(){
    resultPalindrome.innerHTML = (isPalindrome(userWordPalindrome.value)) ? 'The word is palindrome' : 'Sorry, the word isn\'t palindrome, try again';
});

//even odd send btn onclick
sendBtnEvenOdd.addEventListener('click', function(){
    let n = parseInt(userNumEvenOdd.value, 10);
    switch(true){
        //check if the input is a NaN
        case Number.isNaN(n):
            resultEvenOdd.innerHTML = 'Please type a number';
            break;

        //check if it's between 1-5
        case (n < 1 || n > 5):
            resultEvenOdd.innerHTML = 'Please type a number between 1 - 5';
            break; 

        //get the winner and display in #even-odd .result
        default:
            let sum = n + rand(1,5);
            resultEvenOdd.innerHTML = (getWinner(userPickEvenOdd.value, sum)) 
            ? `you win<br>the sum is (${n} + ${sum - n}) = ${sum}` 
            : `Sorry, you lose<br>the sum is (${n} + ${sum - n}) = ${sum}`;
            break;
    }
});

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
function getWinner(userInputs, comNum){
    let sum = userInputs.num + comNum;
    return (isEven(sum) === userInputs.pick);
}




/**--------------------------------------------------------------------
 *                              VARIABLES
 --------------------------------------------------------------------*/
//palindrome variables
const userWordPalindrome = document.querySelector('#palindrome .user-word');
const sendBtnPalindrome = document.querySelector('#palindrome .send');
const resultPalindrome = document.querySelector('#palindrome .result');

/**--------------------------------------------------------------------
 *                              EVENTS
 --------------------------------------------------------------------*/
//palindrome send btn onclick
sendBtnPalindrome.addEventListener('click', function(){
    resultPalindrome.innerHTML = (isPalindrome(userWordPalindrome.value)) ? 'The word is palindrome' : 'Sorry, the word isn\'t palindrome, try again';
});

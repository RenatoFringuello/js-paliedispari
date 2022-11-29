//palindrome words
function isPalindrome(word){
    for (let i = 0; i < word.length; i++) {
        if(word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

const userWord = document.getElementById('user-word');
const sendBtn = document.getElementById('send');
const result = document.getElementById('result');

sendBtn.addEventListener('click', function(){
    result.innerHTML = (isPalindrome(userWord.value)) ? 'The word is palindrome' : 'Sorry, the word isn\'t palindrome, try again';
});

function isPalindrome(str) {
    // Base case
    if(str.length <= 1) return true;

    // Compare first and last characters
    if(str[0] != str[str.length - 1]) return false;

    // Recursively check the substring without first and last characters
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("kalu"));
console.log(isPalindrome("lol"))
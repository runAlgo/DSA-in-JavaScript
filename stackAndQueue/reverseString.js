const reverseString = (str) => {
    const stack = [];
    let reversed = ""
    for(let char of str) {
        stack.push(char);
    }
    while(stack.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}

const reversedString = reverseString("Hello Kalu");
console.log(reversedString)
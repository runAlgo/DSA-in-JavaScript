const isValidParenthesis = (str) => {
  const stack = [];

  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    //   console.log("This is bracket char: ", brackets[char]);
    } else {
      const top = stack.pop();

      if (!top || brackets[top] != char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("{)}()[")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(]}")); // false




// const isValidParenthesis = (str) => {
//   const stack = [""];
  
//   const brackets = { // {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };

//   for (let char of str) { //"( ) [ ] {})"
//     if (brackets[char]) {
//       stack.push(char);
//     }
//      else {
//       const top = stack.pop();
//       if (!top || brackets[top] != char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;

// };

// console.log(isValidParenthesis("()[]{}()"));
// console.log(isValidParenthesis("[]()"));
// console.log(isValidParenthesis("){}["));
// console.log(isValidParenthesis("}"));

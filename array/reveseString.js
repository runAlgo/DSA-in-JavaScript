

// let location = "gaudi";
// let reversed = "";
// for(let i = location.length - 1; i >= 0; i--) {
//     reversed += location[i];
// }
// console.log(reversed)



// let value = "lole"
// const reversed = value.split("").reverse().join("");
// if(reversed === value) {
//     console.log("Palindrome");
// }else{
//     console.log("Not palindrome");
// }


// Reverse Number
// const reverseInt = n => {
//     const reversed = n.toString().split("").reverse().join("");
//     return parseInt(reversed) * Math.sign(n);
// }
// console.log(reverseInt(1234))


// Sentenves Capitalization( Convert the first Letter of Each Word into Capital Letter)
// For Eg:- hello world = Hello World

// Hints:- 
// 1. Make the string lowercase
// 2. Convert string to array
// 3. Capitalize each word
// 4. Convert array back to string


// const capitalized = string => {
//     return string.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalized("hello ke xa khabar sathi"))





// FizzBuzz
// 1. Print numbers from 1 to n
// 2. If number is divisible by 3, print "Fizz"
// 3. If number is divisible by 5, print "Buzz"
// 4. If number is divisible by 3 and 5, print "FizzBuzz"
// Else, print the number

// const FizzBuzz = number => {
//     for(let i = 1; i <= number; i++){
//         if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//         else if(i % 5 === 0) console.log("Buzz");
//         else if(i % 3 === 0) console.log("Fizz");
//         else console.log(i);
//     }
// }
// FizzBuzz(15);



// ***** MaxProfit ******

// Imagine you're buying and selling stocks throughout the year.
// Your job is to find the biggest profit you could make by
// buying low and selling high only once.

// Here's What you're give:
//   A list of stock prices for each day 👉 [7, 1, 5, 3, 6, 4]

// Here's what you need to find:
//  the difference between the cheapest price you could have 
//  bought stock and the most expensive price you could have
//  sold it later on.


// const buyingStock = weeklyPrices => {
//     let minPrice = weeklyPrices[0];
//     let maxProfit = 0;

//     for(let i = 1; i < weeklyPrices.length; i++) {
//         minPrice = Math.min(minPrice, weeklyPrices[i]);

//         maxProfit = Math.max(maxProfit, weeklyPrices[i] - minPrice)
//     }
// return maxProfit;
// }
// console.log(buyingStock([7, 1, 5, 3, 6, 4]))




// Array Chunks:-


const chunk = (array, size) => {
    let index  = 0;
    const chunked = [];
    while(index < array.length) {
        const chunk = array.slice(index, index + size);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
}
console.log(chunk([1, 2, 4, 5, 6, 7, 8, 9], 3))
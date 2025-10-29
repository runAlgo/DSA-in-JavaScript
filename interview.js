// Capitalize first letter of the word
// const capitalize = (str) => {
//     return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
// };
// console.log(capitalize("kalu don is here"))

// const fizzBuzz = (n) => {
//     for(let i = 1; i <= n; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else if(i % 3 === 0) {
//             console.log("Fizz")
//         }
//         else if(i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(10)


// ******** Buy Stock and get get profit *******

// const maxProfit = prices => {
//     let minPrice = prices[0];// Assuming the first day is the cheapest to buy
   
//     let maxProfit = 0;

//     for(let i = 1; i < prices.length; i++) {
//         const currentPrice = prices[i]
        

//         // Update minimum price if the lower price is found
//         minPrice = Math.min(minPrice, currentPrice)
        
//         const potentialProfit = currentPrice - minPrice;
//         console.log(potentialProfit)

//         maxProfit = Math.max(maxProfit, potentialProfit);

//     }
//     return maxProfit;

// }

// const prices = [7, 1, 5, 3, 6, 4]
// console.log(maxProfit(prices))



// ***** Array Chunk ******


// Write a function that takes an array and a chunk size as input. 
// The function should return a new array whare the original array 
// is split into chunks of the specified size.

// chunk([1, 2, 5, 6, 7, 8, 9], 5) => [[1, 2, 5], [6, 7, 8], [9]]



// const arrayChunk = (chunks, n) => {
//     const chunked = []

//     let index = 0;

//     while(index < chunks.length) {
//         const chunk = chunks.slice(index, index + n)
//         chunked.push(chunk)

//         index += n;
//     }

//     return chunked;
// }


//  console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))


// const getChunkedArray = (array, size) => {
//     let index = 0;
//     let chunkedArr = [];

//     while(index < array.length) {
//         let chunk = array.slice(index, index + size);
//         chunkedArr.push(chunk);

//         index += size;
//     }
//     return chunkedArr;
// }
// const array = [2, 3, 4, 5, 6, 7, 8, 2, 3, 5];
// console.log(getChunkedArray(array, 9))




// Two Sum

// const twoSum = (array, target) => {
//     for(let i = 0; i < array.length; i++) {
//         for(let j  = i + 1; j < array.length; j++) {
//             if(array[i] + array[j] == target) {
//                 return [i, j]; // Return an object with indices*
//             }
//         }
//     }
//     return "number not found";
// }
// const array = [2, 3, 4, 6, 7, 9]
// const target = 9;

// console.log(twoSum(array, target));




/**
 * Imaging your're buying and sellig stocks throughout the year.
 * Your job is to find the biggest profit you could make by buying 
 * low and selling high only once.
 * 
 * ----Here's what you're given:
 *  A list of stock prices for each day [7, 1, 5, 3, 6, 4]
 * 
 * ----Here's what you need to find:
 * The difference between the cheapest price you could have bought 
 * the stock and the most expensive price you could have sold it 
 * later on.
 */
// const stocksPrices = [7, 1, 5, 3, 6, 4];
// let maxProfit = 0;
// let buyIndex = -1;
// let sellIndex = -1;
// for(let i = 0; i < stocksPrices.length; i++) {
//     for(let j = i + 1; j < stocksPrices.length; j++) {
//         const currentProfit = stocksPrices[j] - stocksPrices[i];
//         if(currentProfit > maxProfit) {
//             maxProfit = currentProfit
//             buyIndex = i;
//             sellIndex = j;
//         }
//     }
// }
// console.log(`We get profit $${maxProfit}, when we buy stock at ${buyIndex} and sell at ${sellIndex}`)


// const maxProfit = prices => {
//     let minProfit = price[0]; // Assume the first day is the cheapest to buy
//     let maxProfit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         const currentPrice = prices[i];
//     }
// }

// const prices = [7, 1, 5, 3, 6, 4]
// const profit = maxProfit(prices);
// console.log("Maximum profit: ", profit)

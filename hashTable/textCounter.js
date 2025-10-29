// Word Counter 

// function wordCounter(text) {
//   const lowerText = text.toLowerCase();
  
//   const wordMap = {}

//   const words = lowerText.split(/\s+/);
  
//   for(const word of words) {
//     if(word in wordMap) {
//         wordMap[word]++
//     }else {
//         wordMap[word] = 1
//     }
//   }

//   return wordMap;

// }
// const text = "Walk the dog dog dog is here is is is"

// console.log(wordCounter(text))




// Two Sum problem and return the index

function twoSum(values, target) {
    const index = []

    for(let i = 0; i < values.length; i++) {
        for(let j = i + 1; j < values.length; j++) {
            if(values[i] + values[j] === target) {
                index.push(i, j);
                break;
            }
        }
    }
    return index;
}

const values = [5, 4, 6, 3];
const target = 9;

const result = twoSum(values, target);
console.log(result);
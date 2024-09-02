// Imagine you have a list of numbers and a target number.
// Your job is to find two numbers in that list that add up to the 
// target number. You also need to tell which positions(or indexes) 
// those two numbers are at in the list.


// Example:

// if the list is [2, 7, 11, 15] and the target is 9, then
// the answer would be [0, 1] because 2(at index 0) plus 7(at index 1) equal 9.


const findTwoSum = (array, target) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array.length; j++) {
            if(array[i] + array[j] === target) return {i, j};
        }
    }
}
console.log(findTwoSum([2,3,4,6,7,9], 8))

// function twoSum(nums, target) {
//  const numMap = {}
//  for(let i = 0; i < nums.length; i++) {
//     const compliment = target - nums[i];

//     if(compliment in numMap && numMap[compliment] != i) {
//         return [numMap[compliment], i];
//     }
//     numMap[nums[i]] = i;
// }
//  return [];
// }

// const nums = [7, 7, 5, 8, 1];
// const target = 14;
// const result = twoSum(nums, target);
// console.log(result); //[0, 1]

function twoSum(nums, target) {
  const numMap = {};

  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if(complement in numMap && numMap[complement] != i) {
      return [numMap[complement], i];
    } else {
      numMap[nums[i]] = i;
    }
  }
  return [];
}
const nums = [1, 2, 3, 4, 5, 6];
const target = 4;
console.log(twoSum(nums, target));
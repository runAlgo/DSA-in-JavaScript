const arr = [1, 2, 3, 4, 5];
function pair(arr) {
for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        console.log(`pair: ${arr[i]}, ${arr[j]}`)
    }
}
}
pair(arr)
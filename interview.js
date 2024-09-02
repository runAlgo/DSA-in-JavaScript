// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 4));

// We can curry this function to create a new function 
// that takes one argument and returns another function 
// that takes the second argument:-

// function curruedAdd(x) {
//     return function(y) {
//         return function(z) {
//             console.log(`This is currying in JS: x + y = ${x + y}, y * z = ${y * z}`)
//         }
//     };
// }
// curruedAdd(4)(3)(8)

// function add(a) {
//     return function (b) {
//         if(b) return add(a + b);
//         else return a;
//     }
// }
// const res = add(3)(4)(2)()
// console.log(res)


// const arr = [1, 2, 3, 4]

// delete arr[2];
// console.log(arr[2])



let box = document.getElementById("box")

let swithState = 0;

function changeColor() {
    swithState = (swithState === 0) ? 1 : 0; // Toggle switch state using a ternary operator

    // Update box background color based on switchState:
    box.style.backgroundColor = (swithState === 0) ? "red" : "blue";
}
swithState = (swithState === 0) ? 1 : 0; // Toggle switch state using a ternary operator

box.addEventListener("click", () => {
    changeColor()
})

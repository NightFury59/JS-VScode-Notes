for (let i = 0; i < 4; i++) {
    console.log(i)                     // 0 1 2 3 
}


for (let i = 0; i < 4; i++) {
    console.log(i)

    if (i === 1) {
        break;                          // it will give 0 and 1 too then break.
    }
}


for (let i = 0; i < 4; i++) {
    
    if (i === 1) {
        continue;                      // this will skip the 1 , when it sees the 1 it will ignore it and continue.
    }
    console.log(i);
}


// we can use the while loop too --

let i = 0
while (i < 4) {                      // while loop , here i is scoped outside of the block instead of inside of the block.
    console.log(i);
    i++;
}



let a= 0
do {
    console.log(a);
    a++
}
while (a < 4)



for (const value of [5, 6, 7]) {
    console.log(value)                    // 5 6 7
}



for (const string of "Neeraj") {
    console.log(string)                   // N e e r a j
}



let obj = {
    name : 'Neeraj',
    course : 'FrontEnd Expert',
}


// to get keys.
for (const key in obj) {                  // here we use 'in' .
    console.log(key);
}


// to get values we must do --
for (const key in obj) {
    console.log(obj[key])
}

// to get both the key and value we can use comma in console.log as it can take two values --

for (const key in obj) {
    console.log(key + ' =', obj[key]);        
}


// going through an array using forEach with function.
[1, 2, 3].forEach(function(value) {
    console.log(value);                     // 1 2 3
})

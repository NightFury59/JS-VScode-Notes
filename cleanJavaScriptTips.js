// ****** Below are some point we can implement to write our JavaScript code in a neat and clean manner ****** //


// 1) - Use modern syntax -
// like arror function, destructuring, template literals, etc.
// below is the exam of a normal code which we will make cleaner using modern syntax -

people.forEach(function(person) {
    console.log(
        person.name + 'is' + person.age + 'years old'
    );
});

// lets make the above code cleaner using modern javascript syntax

people.forEach(({name, age}) => {
    console.log(`${name} is ${age}} years old`)
})


// 2) Avoid callback nesting -
// Use promises with async/await when possible -
 
foo((error, fooValue) => {
    if (error !== null) {
        return doErrorStuff(error)
    }
    bar(fooValue, (error, barValue) => {
        if (error !== null) {
            return doErrorStuff(error);
        }
        doSomething(barValue)
    });
});

// lets avoid the callback nestings in the above code and use try catch block -

try {
    fooValue = await foo();
    barValue = await bar(fooValue);
    doSomething(barValue);
} catch(error) {
    doErrorStuff(error);
}


// 3) Avoid overusing 'this' -
// oftentimes simple parameters are better.

function getName() {
    return this.name;
}

getName.call(person);

// lets do it with simple parameter -

function getName({name}) {
    return name;
}

getName(person);


// 4) Use functional programming -
// Pure functions for consistent, maintainable code.
// Function chaining for readability.
// Utilize functional programming as much as possible

const arr = [1, 2, 3, 4]

const newArr = []
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 2) {
        newArr.push(arr[i] * 2);
    }
}

console.log(newArr);


// now lets write the above code using functional programming tricks

const arr2 = [1, 2, 3, 4]

const newArr2 = arr2
    .filter(val => val > 2)
    .map(val => val * 2)
    .reverse();

console.log(newArr2)


// 5) Use a code autoformatter -
// it is a plugin that you can add to your editor.
// Automatically formats code on save
// Creates consistency across developers
// Prettier - Most popular option


// 6) Using style guides -
// Provides guidelines on how the code should be written
// For smaller projects use an open source one like Google's
// The goal of the style guides is to encourage consistency
// Many styles guides, such as the Google JavaScript Style Guide, are open source


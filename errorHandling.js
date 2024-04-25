throw 'On no!'   // it will throw an error saying Oh no!


// a lot of times we use the new Error to throw the error.

throw new Error('Oh no!')

// we can also catch the errors by using the try catch blocks.


try {
    throw new Error('Oh no!')
} catch (error) {
    console.log(error);
}

console.log('Neeraj')           // here the error is caught in the try catch block, hence the code after the block will get executed.



try {
    throw new Error('Oh no!')
} catch (error) {
    console.log(error);
}

throw new Error('Oh no!')

console.log('Neeraj')           // here it cant be executed as there is an error outside ot the try catch block. 

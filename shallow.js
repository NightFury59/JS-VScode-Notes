// Shallow copy and Deep copy are used to make immutable copies.
// we use the spread operator {...}
// spread operator takes out the **first properties** inside any object and creates a separate reference.
// ** In shallow copy just one level of immutability is maintained, in Deep copy multiple levels of
// immutability is maintained. 

let firstPerson = {
    name : 'Neeraj',
    age : 20,

    adress : {
        city : 'Lucknow',
        state : 'UP'
    }
}

let secondPerson = {...firstPerson}; // shallow copy

secondPerson.adress.city = 'Pune'

console.log(firstPerson)
console.log(secondPerson)

// So now for adress we are encountering the same issue of both values of city changing,
// to handle this we use Deep copy.

// go to deep.js

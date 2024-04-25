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

let secondPerson = JSON.parse(JSON.stringify(firstPerson))   // Deep Copy

secondPerson.adress.city = 'Pune';

console.log(firstPerson)

console.log(secondPerson)

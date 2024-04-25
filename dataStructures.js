// 1) Stack is LIFO (Last In First Out)

const stack = []
stack.push(1);
stack.push(2)
console.log(stack.pop())                        // 2


// 2) Queue is FIFO (First In First Out) 

const queue = []
queue.push(1)
queue.push(2)
console.log(queue.shift())                      // 1


// 3) Maps - It has key value pairs

const map = new Map()
map.set('test', 123)
map.set(10, 'ten')
map.set('name', 'Neeraj')

console.log(map.get('test'))                    // 123
console.log(map.get(10))                        // ten
console.log(map.get('name'))                    // Neeraj
console.log(map.size)                           // 3
console.log(map.has(10))                        // true
map.delete(10)
console.log(map.get(10))                        // undefined as it got deleted


// Lets take a look at how we can iterate through a map, we have a few ways to do it -

for ([key, value] of map) {
    console.log(key, value)                     // it will logout all the key and values of the map
}

// By forEach loop -

map.forEach((value, key) => {                   // the callback function will take the value first and then the key
    console.log(key, value)
})


const iter = map.entries()
console.log(iter.next().value)                  // it will give the first key value pairs

// we can also get only the keys or only the values, for that we have to just use map.keys() or map.values() instead
// of map.entries()

// ** We can also instantiate the map with the key value pairs in it instead of adding the values later on like -
// use 2d array

const mapp = new Map([['hi', 22], [7, 'seven']]);

console.log(mapp.get('hi'))                     // 22



// 4) Sets - Sets are very similar to maps, map is key value pairs with the keys being unique and a set is a set
//           unique values.

// we can also delete elements in the set by using set.delete which will remove a single pair, 
// we can do set.clear() to delete all the pairs.
// there is no get method in set, but we can check if a value is in the set -
// we can also instantiate a set using a 1d array like below

const set = new Set([123, 456])
// set.add(123)
// set.add(456)
console.log(set.has(123))                       // true

// Iterating through the set -

// by using for of loop -

for (val of set) {
    console.log(val)
}

// by using forEach() method -

set.forEach(value => {
    console.log(value)
})

// by using iter

const iter2 = set.values()
console.log(iter2.next().value)                 // 123


// **** Sets dont have duplicates **** //

// like we can remove duplicates from the array using sets as they dont accept duplication -

const arr = [1, 2, 2, 3, 4]
console.log(Array.from(new Set(arr)));                  // [1, 2, 3, 4] the extra 2 got removed.



// 4) WeakSet and WeakMaps --

// A weakSet/weakMap works just like set/map however there are two key differences -
// first the keys can only be objects so we can only add objects as keys and the values of a weakMap/set can only be objects.

// weakset/map doesnt prevent garbage collection


// 5) LinkedList -

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addStart(value) {
        const node = new Node(value)
        node.next = this.head;
        this.head = node;
    }

    addEnd(value) {
        const node = new Node(value)
        let curr = this.head;

        if (curr == null) {
            this.head = node;
            return
        }

        while (curr.next != null) {
            curr = curr.next;
        }

        curr.next = node;
    }
}


// Lets try using our Linked List ----


const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);

console.log(list.head.value)                    // 2 is the head because it is the last element we added to the start
console.log(list.head.next.value)               // 1 because it is the next element after 2 
console.log(list.head.next.next.value)          // 3
console.log(list.head.next.next.next)           // null



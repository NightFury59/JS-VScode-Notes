// 1) // ********************* COOKIES *************************** //

// Different ways we can store information in the browser, for ex if a user closes a tab and comes back 
// next day he still has that page like it was yesterday -

/* Cookies are the most traditional form of browser storage, and they are simply key value pairs */

// document.cookie = 'user=clement'
// console.log(document.cookie)

// by default the cookies will expire when the session ends meaning when the browser tab closes

// we can override a cookie, like we can change the user from conner to clement

// we cant delete the cookie, the way we can do it is to expire the cookie

// there is another way to delete a cookie and that is by using max-age, instead of being a time it is going to
// be the number of seconds that we want the cookie to exist for like max-age=0. It says we want the cookie to exist for 0 seconds.

// we can also set the path of the cookie by using path

// we can set the cookie to https by using secure


// 2) // **************** WEB STORAGE API ****************** //


// Web storage api contains two primary types of storage, local storage and session storage, both of these are
// essentialy the same thing, they contain key value pairs just like cookies do the main difference is that they 
// are much easier to work with they actually have functions to use instead of getter and setters of document cookie property

// *** The difference between local storage and session storage is that local storage does not expire, while the session
// storage expires at the end of the session *** //

// to use it we can use the setItem method and this method takes in a key and a value -

// localStorage.setItem('user', 'Conner')
// localStorage.setItem('course', 'frontEndExpert')

// to get the items we can use the getItem along with the key name -

// console.log(localStorage.getItem('user'))                   // Conner

// to remove the item -

//localStorage.removeItem('user')
//console.log(localStorage.getItem('user'))                   // null

// we can also use clear() it removes everything and clears completely out -

//localStorage.clear();

// we can use session storage in the exact way we use localStorage.


// 3) // ****************************** INDEX DB *********************************** //

// It is more complicated, it is an object storage database which means we can store javascript objects and also entire files.

// to create a database -

const request = indexedDB.open('myDatabase', 1)         // 'myDatabase' is the name and 1 is the version number

request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    const store = database.createObjectStore('users', {keyPath: 'id'});
    store.createIndex('name', 'name')

    store.add({
        id: 0,
        name: 'Conner',
        course: 'frontEndExpert'
    });
    store.add({
        id: 1,
        name: 'Clement',
        course: 'AlgoExpert'
    });
})


// we usually dont use indexedDB.

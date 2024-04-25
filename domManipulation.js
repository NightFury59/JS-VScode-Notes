 const hi = document.getElementById("second-li")             // here we had the id of 2nd list item, the getElementById selects the particular element.

// // querySelector takes in an css selector as a string and returns whatever elements the selector selects.
// // if the selector selects multiple elements then it just selects the first one.

const firstLi = document.querySelector('li')
console.log(firstLi)
console.log(hi)

// // we can use the querySelectorAll which gets every element matching the selector rather than getting just the first element.

const all = document.querySelectorAll('li');
console.log(all);

console.log(all.length)                 // 3 

// using forEach to log every items in the list

all.forEach(li => {
    console.log(li);
});


/// we can also do document.getElementsByTagName() --

const hello = document.getElementsByTagName('li')
console.log(hello);

// but it is not recommended to use as it is of HTML collection and it doesnt have a forEach function support.

Array.from(hello).forEach(li => {
    console.log(li);                // this will give an error, we have to do Array.from to solve it.
})
// but why would we do this when we can simply do document.querySelectorAll.


// // Now lets see how we can edit the DOM nodes --

const listItems = document.querySelectorAll('li');

console.log(listItems);

listItems[0].style.backgroundColor = 'black';
listItems[1].textContent = 'Changed!';

// one interesting property is the value property and this is going to change what the value is inside listItems.

 listItems[0].value = 5

// we can also use setAttributes for it --

 listItems[0].setAttribute('value', 7)

// we can also setAttributes for any class like lets set the attributes for the blue class in the css;

listItems[0].setAttribute('class', 'blue big'); 
listItems[0].classList.remove('big');

// lets use classList.add to add stuff to listItems[1]--
listItems[1].classList.add('big', 'blue')


// there is one more classList items and that is toggle, what toggle does is that it adds the attribute if it isnt there
// and if it is already present then it removes that attribute.

listItems[1].classList.toggle('big')        // it will remove the big
listItems[0].classList.add('big')           // as big isnt present in listItems[0] it will add it.



//// *** Creating DOM nodes *** ////
// for that we use document.createElement()//

const p = document.createElement('p')
p.textContent = 'Hello World!';


// lets add this to the DOM 

document.body.append(p)                // now it will show Hello World!

// we also have a function prepend it is exactly like append but in prepend it will show the output at the top
// of the page and in append it will show the output at the bottom of the page.

document.body.prepend('Hello all!')


// instead of creating a text content we can also create a text node -

const pa = document.createElement('pa');
const text = document.createTextNode('Hello World Guys!')
pa.append(text);
document.body.prepend(pa)


// Theres one more alterenative and that is using inner node, inner html is a property of elements that contains all
// of the html inside it as a string

console.log(listItems[0].innerHTML)

// document.body.innerHTML += '<p>Hello from Inner HTML</p>'       // this is not recommended.


 document.body.innerHTML = '';               // this is worth it and quite useful, it clears out all elements.


// / **** Using Loops **** ///

const listItems2 = document.querySelectorAll('li')


for (let i = 0; i < 3; i++) {                                           // this is normal and would work normally 
    const parent = document.querySelector('ol')                         // but here due to so much code above theres some problem.
    const li = document.createElement('li')
    li.textContent = `List items with i=${i}`
    parent.append(li)
}


// / ** Getting sizes from the DOM ** ///

console.log(window.innerWidth);                                         // it will log out the width in pixels.

console.log(window.innerHeight)                                         // it will log out the height in pixels.


console.log(window.getComputedStyle(listItems[0]).fontSize)             // 32 px


// scrollable container //

console.log(scrollable.clientHeight);                                   // 220 px, padding + height

console.log(scrollable.offsetHeight)                                    // 228 px, visible height + padding + border.

console.log(scrollable.scrollHeight)                    

console.log(scrollable.offsetTop)               // distance from outer border to the inner


// whats interesting is that we can use offset top to see how far individual elements are from the top of the scrollable container.

console.log(scrollable.guerySelectorAll('p')[5].offsetTop)         // its fine but isnt working due to the huge amount of code above.

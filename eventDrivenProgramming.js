const button = document.querySelector('button');
button.addEventListener('click', onClick);

document.body.addEventListener('click', onClick);

function onClick(event) {
    console.log(event.target)                           // // what the event fired on
    console.log(this);                                  // // it will log out whatever is before the addEventListener.
}


const scrollable = document.getElementById('scollable');

scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop);
})

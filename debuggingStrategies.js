const button = document.querySelector('button')

//console.log(button)           // it is showing up no problem here

button.addEventListener('click', moveRight);                // lets check if this is working by console logging in function -

function moveRight() {
    console.log('here')                                     // the event listener is also fine no error here
    const circle = document.getElementById('circle');
    const { left } = getComputedStyle(circle);
    console.log(left)                                       // 0px , no problem over here
    //circle.style.left = left + 10;
    circle.style.left = parseInt(left) + 10 +'px';          // this is correct and now everything is right in the code.
}

// Now when we click the move right button it is not working,
// Lets see how to debug this -

// First check in the browser console if we have any error message that is showing,
// as there is no error message this wont help us.

// ***** Try console logging individually to check and try finding out where the problem is ***** //

// So as we went through the code it is obvious where the bug is and that is in line number 12.

// what we will do to fix it is wrap left in parseInt and add string of px after 10.

// ** Debugger -- We can also use the debugger inside of the moveRight function which will open up the 
// sources tag inside of browser and it will contain useful information about the code 

// ** Breakpoints -- There is an eventListenerBreakpoint section on the right side of the sources tab,
// when we open it up we can see different types of event listeners as in our case we are interested in
// click event will select it and open it up and then we can check the contents in our lines of code.




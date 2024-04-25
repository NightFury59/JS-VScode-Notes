// we can add strict mode by saying 'use strict' and all strict mode does is make the code execute in 
// slightly stricter manner.]

// it is useful to find easy bugs for us.

'use strict'

x = 5;          // it will give error in strict mode as we are not using let,var,const before x. It wouldnt give anything in normal mode.


// we can also use strict mode in specific places like we can declare it just inside the body of a function
// then that function will be executed in strict mode.

function hello() {
    'use strict' 
    x = 5
}
hello()                     // well get the error message.


function hello2() {
    x = 5;
}

hello2()                       // here we wont get the error message.

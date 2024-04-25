self.addEventListener('message', event => {
    console.log(event.data);
    postMessage(event.data * 10)
});

// 2nd method for the above -

// onmessage = function(event) {
//     console.log(event.data)
// }



for (let i = 0; i < 3000000000; i++) {
    1 + 2;
}
console.log('slow operation finished')

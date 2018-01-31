// promise expect 2 parameters: resolve & reject
let promise = new Promise((resolv, rej) => {
    setTimeout(() => {
        // resolv('Done!');
        rej('Failed!');
    }, 5000);
});

promise.then((value = "default") => {
    console.log(value);
}, err => {
    console.log(err);
});

promise.then((value = "default") => {
    console.log(value);
}).catch(err => {
    console.log(err);
});

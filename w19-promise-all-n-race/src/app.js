let p1 = new Promise((resolv, rej) => {
    setTimeout(() => {
        resolv("Resolved!");
    },1000);
});

let p11 = new Promise((resolv, rej) => {
    setTimeout(() => {
        resolv("Resolved!");
    },1000);
});

let p2 = new Promise((resolv, rej) => {
    setTimeout(() => {
        rej("Reject!");
    },1000);
});

// Ex1. All
// only when all promises resolved.
// wait for the last
Promise.all([p1, p2])
        .then( success => {
            console.log("test1 " + success);
        })
        .catch( error => {
            console.log("test1 " + error);
        });

Promise.all([p1, p11])
        .then( success => {
            console.log("test2 " + success);
        })
        .catch( error => {
            console.log("test2 " + error);
        });

// Ex2. Race
// wait for the first, and take the first result.
Promise.race([p1, p2])
        .then( success => {
            console.log("race test1 " + success);
        })
        .catch( error => {
            console.log("race test1 " + error);
        });

Promise.race([p1, p11])
        .then( success => {
            console.log("race test2 " + success);
        })
        .catch( error => {
            console.log("race test2 " + error);
        });
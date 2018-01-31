function waitASecond(seconds) {
    return new Promise((resolv, rej) => {
        if (seconds > 2) {
            rej('Rejected');
        }
        setTimeout(() => {
            seconds ++;
            resolv(seconds);
        }, 1000);
    });
}

waitASecond(0)
        .then(waitASecond)
        .then(seconds => {
            console.log(seconds);
        }).catch(err => {
            console.log("test1" + err);
        });

waitASecond(2)
        .then(waitASecond)
        .then(seconds => {
            console.log(seconds);
        }).catch(err => {
            console.log("test2 " + err);
        });
var btn = document.querySelector('button');

function fn1() {
    console.log(this);
}

var fn2 = () => console.log(this); // `this` always refers to the window object

//btn.addEventListener('click', fn1);
btn.addEventListener('click', fn2);
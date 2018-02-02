let keyValue = 1000;
function test() {
    console.log('testing');
}

let defFn = () => {
    console.log('Default function');
}

export { keyValue, test };
export default defFn;
let array = [1,2,3];

array[Symbol.iterator] = () => {
    let nextValue = 10;
    return {
        next: () => {
            nextValue ++;
            return {
                done: nextValue > 30 ? true : false,
                value: nextValue
            };
        }
    };
}

for (let el of array) {
    console.log(el);
}

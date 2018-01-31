let person = {
    name: 'Me',
    hobbies: ['Sports', 'Cooking'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hbs = this.hobbies;
        return {
            next: function() {
                let value = hbs[i];
                i ++;
                return {
                    done: i > hbs.length ? true : false,
                    value: value
                };
            }
        };
    }
};

for (let h of person) {
    console.log(h);
}
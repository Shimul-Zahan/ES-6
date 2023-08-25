const instreucotr = [
    {name: 'nodi', age: 28, position:'Senior'},
    {name: 'shimul', age: 25, position:'junior'},
    {name: 'sohan', age: 32, position:'Senior'},
]

const person = instreucotr.filter(person => person.position === 'Senior');
// name using foreach method
person.forEach((name) => {
    console.log(name.name)
})

// name using map method
const name = person.map((item) => {
    return item.name;
});
console.log(name)


const array = [10, 33, 50, 79, 78, 90, 101, 30];
const result = array.filter(item => item % 10 === 0);
console.log(result)

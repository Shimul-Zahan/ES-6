const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Teena', age: 22},
]

//here start = meena and end = Rena and Teena
//here 0 is the initial value of start and end.age is the value that we want to add;
const sum = people.reduce((start, end) => start + end.age, 0)
console.log(sum);

// let sum = 0;
// const sum1 = people.forEach((item) => {
//     console.log(sum += item.age)
// })
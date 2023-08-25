const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 11, 12, 13]

const finalArray = [];
finalArray.push(...array1, ...array2);
console.log(finalArray);

// finalArray.push(...array1);
// finalArray.push(...array2)
// console.log(finalArray)
// main reasone for call back to call a function at a time and all the function are 
//independent

function dispaly(res) {
    console.log('The sum is : ' + res);
}

function add(x, y, sum) {
    const result = x + y;
    sum(result);
}

// call the function
add(5, 6, dispaly);
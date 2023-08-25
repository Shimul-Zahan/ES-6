
const status = true;

console.log('Status 1');

//here the promise definiton
const promise = new Promise(function (resolve, reject) {  
    setTimeout(function () {
        if (status) {
            resolve('Status 2');
        } else {
            reject('Fail');
        }
    }, 2000)
})

// promise call
promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err)
    })

console.log('Status 3');
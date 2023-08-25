const enrollment = true;
const marks = 92.5;

function enroll() {
    console.log("Enrollment start now");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (enrollment) {
                resolve();
            } else {
                reject("You cann't enrollment now.")
            }
        }, 2000)
    })

    return promise;
}

function progress() {
    console.log("Course in progress");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject("Course now stop!!!");
            }
        }, 3000);
    })

    return promise;
}

function certificate() {
    console.log('Youe certificate on the way :) ');

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congrats you got you reward");
        }, 2000)
    })
    
    return promise;
}

enroll()
    .then(progress)
    .then(certificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err)
    })
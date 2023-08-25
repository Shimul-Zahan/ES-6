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
    console.log('Your certificate on the way :) ');

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congrats you got your reward");
        }, 2000)
    })

    return promise;
}

// create async function to call the function
async function course() {
    try {
        // here the function is return the promise we add await before them to call the function
        await enroll();
        await progress();
        // last function that return the promises that's why we collect it and display it
        const message = await certificate();
        console.log(message);
    } catch (err) {
        console.log(err)
    }
}

course();
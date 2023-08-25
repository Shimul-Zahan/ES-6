
const enrollment = true;
const marks = 90;

function enroll(callback) {
    console.log("Enrollment start now");

    setTimeout(function () {
        if (enrollment) {
            callback();
        } else {
            console.log("You couldn't enrollment now!!!");
        }
    }, 2000)
}

function progress(callback) {
    console.log("Course in progress");

    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else {
            console.log("Course now stop!!!");
        }
    }, 3000);
}

function certificate() {
    console.log('Congraculations you got certificate :) ');
}

// *** call the function ***
enroll(function () {
    progress(certificate);
})
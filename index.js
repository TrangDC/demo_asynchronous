function start(callback1, callback2) {
    setTimeout(() => {
        console.log("Starting");
        callback1(callback2);
    }, 2000);
}

function doing(callback) {
    setTimeout(() => {
        console.log("Doing");
        callback();
    }, 1500);
}

function done() {
    setTimeout(() => {
        console.log("Done");
    }, 500);
}

// // Usage
// start(() => {
//     doing(() => {
//         done();
//     });
// });
start(doing, done);
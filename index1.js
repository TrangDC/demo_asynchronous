function start() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Starting");
            resolve();
        }, 2000);
    });
}

function doing() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Doing");
            resolve();
        }, 1500);
    });
}

function done() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Done");
            resolve();
        }, 500);
    });
}

// start()
//     .then(() => doing())
//     .then(() => done());

async function main() {
    await start();
    await doing();
    await done();
}
main();
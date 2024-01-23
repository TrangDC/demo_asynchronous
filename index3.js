function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function start() {
    await delay(2000);
    console.log("Starting");
}

async function doing() {
    await delay(1500);
    console.log("Doing");
}

async function done() {
    await delay(500);
    console.log("Done");
}

async function execute() {
    await start();
    await doing();
    await done();
}

execute();
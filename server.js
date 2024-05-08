const build = require('./utils/build');
const check = require('./utils/check');

async function runProgram() {
    try {
        await build();
        await check();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

runProgram();

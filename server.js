const build = require('./utils/build')
const check = require('./utils/check')

const runProgram () {
    await build()
    await check()
}

runProgram()
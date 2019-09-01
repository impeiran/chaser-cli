const chalk = require('chalk')

/**
 * log error
 * @param err {String | Object}
 */
exports.error = function (err) {
  if (err instanceof Error) {
    err = err.message
  }
  console.log(chalk.red(err))
  process.exit()
}

/**
 * log successful word
 * @param wd {String}
 */
exports.success = function (wd) {
  console.log(chalk.green(wd))
}

exports.finish = function () {
  [
    `\n*********************\n`,
    `  init project finish`,
    `\n*******************\n`
  ].forEach(item => {
    console.log(chalk.green(item))
  })
}
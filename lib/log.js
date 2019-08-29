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

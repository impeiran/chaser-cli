const path = require('path')
const exists = require('fs').existsSync
const rmrf = require('rimraf').sync
const ora = require('ora')
const download = require('download-git-repo')

/**
 * download template into destination
 * @param name {String} templateName
 * @param dest {String} destintion
 */
const downloadTemplate = (name, dest) => {
  return new Promise((resolve, reject) => {
    const spinner = ora('downloading template ...')
    spinner.start()
    if (exists(path.resolve(dest))) rmrf(path.resolve(dest))
    download(name, dest, { clone: false }, err => {
      spinner.stop()
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
  
}

module.exports = downloadTemplate
const fs = require('fs')
const path = require('path')
const CONFIG = require('../config')
const download = require('./download')
const logger = require('./log')

/**
 * generate with info
 * @param {Object} info
 */
const generate = async info => {

  // get template
  const tp = info.isDiy
    ? info.tp
    : CONFIG.owner + '/' + info.tp
  
  // get destination
  const dest = info.genCur
    ? './'
    : info.dest
  
  try {

    await download(tp, dest)

    const packageSrc = `${dest}/package.json`
    let package = fs.readFileSync(packageSrc).toString()

    package = JSON.parse(package)

    package.name = info.name
    package.description = info.description
    package.version = info.version
    package.author = info.author
        
    fs.writeFileSync(packageSrc, JSON.stringify(package, null, '\t'), 'utf-8')

    logger.success('Init project successfully!')

  } catch (error) {
    logger.error(error)
    process.exit()
  }
}

module.exports = generate
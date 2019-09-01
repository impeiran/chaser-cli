const request = require('request')
const CONFIG = require('../config')

module.exports = () => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.github.com/users/${CONFIG.owner}/repos`,
      headers: {
        'User-Agent': 'vue-cli'
      }
    }, (err, res, body) => {
      if (err) reject(err)

      let resBody
      try {
        resBody = JSON.parse(body)        
      } catch (error) {
        reject(err)
      }

      if (Array.isArray(resBody)) {
        resolve(resBody.reduce((con, item) => {
          if (item.name.indexOf(CONFIG.templatePrefix) === 0 ) {
            con.push(item.name)
          }
          return con
        }, []))
      } else {
        reject(err)
      }
    })
  })
}
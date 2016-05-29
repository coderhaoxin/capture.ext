
'use strict'

const path = require('path')

const join = p => path.join(__dirname, p)

module.exports = {
  entry: {
    content: join('src/content.js'),
  },

  output: {
    path: join('build'),
    filename: '[name].js'
  }
}

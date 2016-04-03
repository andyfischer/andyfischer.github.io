
let Fs = require('fs')
let Promise = require('bluebird')
let Marked = require('marked')

let readFile = Promise.promisify(Fs.readFile)
let writeFile = Promise.promisify(Fs.writeFile)


Promise.props({
    template: readFile('index.template.html'),
    cvmd: readFile('cv.md')
})
.then((props) => props.template.replace('{{bodyContents}}', Marked(props.cvmd)))
.then((html) => writeFile('index.html', html))



let Fs = require('fs')
let Promise = require('bluebird')
let Marked = require('marked')

function readFile(filename) {
    return new Promise((resolve, reject) => {
        Fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    });
}

function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        Fs.writeFile(filename, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    });
}

Promise.props({
    template: readFile('index.template.html'),
    cvmd: readFile('cv.md')
})
.then((props) => props.template.replace('{{bodyContents}}', Marked(props.cvmd)))
.then((html) => writeFile('cv.html', html))


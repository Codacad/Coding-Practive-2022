const fs = require('fs')
const path = require('path')


const rs =  fs.createReadStream(path.join(__dirname, 'read-stream.txt'), {encoding:'utf8'})


const ws = fs.createWriteStream(path.join(__dirname, 'write-stream.txt'))

rs.on('data', (data) => {
    ws.write(data)
})

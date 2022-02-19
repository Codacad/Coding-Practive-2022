const fs = require('fs')
const path = require('path')

// Reading the file
// fs.readFile('./myfile.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })


// // Writing to the file
// fs.writeFile(path.join(__dirname, "myfile2.txt"), "Hello, I am here in you", (err) => {
//     if(err) throw err;
//     console.log('Written to the file successfully!')
//     // Appending to the file 
//     fs.appendFile(path.join(__dirname, "myfile2.txt"), "\n\n\n Hello, I am here in you, again", (err) => {
//         if(err) throw err;
//         console.log('Appended to the file successfully!')

//     })
// })


// // Renaming the file
// fs.rename(path.join(__dirname, 'myfile.txt'), path.join(__dirname, "afile.txt"), (err) => {
//     if(err) throw err;
//     console.log('File renamed successfully!')
// })

// Streams

const rs =  fs.createReadStream(path.join(__dirname, 'read-stream.txt'), {encoding:'utf8'})


const ws = fs.createWriteStream(path.join(__dirname, 'write-stream.txt'))

rs.on('data', (data) => {
    ws.write(data)
})

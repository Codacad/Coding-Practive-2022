const fs = require('fs')


// Creating Directories/Folders
// if(fs.existsSync('./new-folder2')){
//     console.log('Folder is already exist!')
// }else{
//     fs.mkdir('./new-folder2', (err) => {
//         if(err){
//             throw err
//         }
//         console.log("Folder Created")
//     })
// }


// Removing Directories/Folders
fs.rmdir('./new-folder2', (err) => {
    if(err) throw err;
    console.log('Folder Deleted!')
})
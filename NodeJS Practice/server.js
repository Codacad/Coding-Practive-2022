const fetch = require('node-fetch')

const fetchImage = async () => {
    const response = await fetch('https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300')

    if(!response.ok){
        return new Error("Image is not retrieve!")
    }

    return await response.blob()
}

fetchImage()
    .then(blob => {
        console.log(blob)
    })
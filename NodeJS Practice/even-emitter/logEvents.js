const { format } = require('date-fns');
const { v4:uuid } = require('uuid')


const fs =  require('fs')
const fsPromises =  require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'dd-MM-yyyy\tHH:mm:ss')}`
    const logItem = `${dateTime}\t ${uuid()}\t ${message}`
    console.log(logItem)
    try {
        await fsPromises.appendFile(path.join(__dirname, 'log', 'logfile.txt'), logItem)
    } catch (error) {
        console.log(error)
    }
}

module.exports =  logEvents;
const { format } = require('date-fns');
const { v4:uuid } = require('uuid')

const date =  format(new Date(), 'dd-MM-yyyy');

console.log(date)

console.log(uuid())
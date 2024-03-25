const later = require('later')

const handleUpdate = require('./update')

later.date.localTime()


console.log("--start--")

handleUpdate()

console.log("--finished--")


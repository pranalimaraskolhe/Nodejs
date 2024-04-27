var fs = require('fs')
//fs.writeFileSync('test.txt', 'Hello from Pranali!')

var data = fs.readFileSync("test.txt", "utf-8")
console.log(data.toString())
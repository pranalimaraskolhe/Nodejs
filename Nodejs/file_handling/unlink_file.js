
var fs = require('fs')

fs.unlink("myfile.txt", (err)=>{
    if(err)
    console.log(err)
    
})
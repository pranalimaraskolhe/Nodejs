var fs = require('fs')

fs.appendFile("sample.txt","\n Some more additional data", function(err){
    if(err){
        console.log("err!",)
    }else{
        console.log("Write Successful")
    }
})
var fs = require('fs')

fs.writeFile("sample.txt","This is sample data", function(err){
    if(err){
        console.log("err!",)
    }else{
        console.log("Write Successful")
    }
})
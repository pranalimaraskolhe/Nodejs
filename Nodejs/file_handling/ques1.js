var fs =  require('fs')
var arr_name = ["Pranali", "Akansha", "Harsha", "Sejal", "Aishwarya"]

str = arr_name.join("|")


fs.writeFile('names.txt', str, function(err){
    if(err){
        console.log(err)   
    }
})
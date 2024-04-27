var fs =  require('fs')

fs.readFile("emp.txt",function(err,data){
    if(err){
        console.log(err)
    }
    else{
        var info_data = data.toString().split("\n")
        //console.log(info_data)
        var salary = 0

        for(i=0;i<info_data.length;i++){
            var info = info_data[i].split(":")
            //console.log(info)
            salary += parseInt(info[3])

        }
        console.log(salary)
    }
})

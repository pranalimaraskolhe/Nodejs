var fs =  require('fs')

var emp_obj = [
    {emp_id:1001,emp_name:"Harry",emp_salary:23000},
    {emp_id:1002,emp_name:"Sarita",emp_salary:20000},
    {emp_id:1003,emp_name:"Monika",emp_salary:35000}
]
str = ''

for(i of emp_obj){
    str += i.emp_id + ":" + i.emp_name + ":" + i.emp_salary + "\n"
}

fs.writeFile('emp_name.txt',str,function(err){
    if(err){
        console.log(err)
    }
})
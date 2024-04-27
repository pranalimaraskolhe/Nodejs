var fs = require('fs')



fs.readFile('cust_data.json',function(err,customer_data){
    if(err){
        console.log(err)
    }
    else{
        //str = ' '
        var cust_info = JSON.parse(customer_data)
        //console.log(cust_info)
        for(i of cust_info){
            console.log("Customer_Name "+ ":" + i.custname + " " + "Phone_no :"+ i.phno + "\n")
        }

    }
})
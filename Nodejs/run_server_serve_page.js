
let http = require("http")
var fs = require('fs')

function process_request(req, resp){
    fs.readFile('welcome.html',function(err, data){
        if(err)
        {
            console.log(err)
        }else
        {
            var len = data.toString().length
        

            resp.writeHead(200, {
                "Content-Length": len,
                "Content-Type" : "text/html"
    
            })

            resp.write(data)
            resp.end();
        }
    })

}

let server = http.createServer(process_request)
server.listen(3000, 'localhost')
console.log("The server is running on http://localhost:3000")
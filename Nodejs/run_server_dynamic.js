
let http = require("http")
var greet = require('./localmodule_ques01')

function process_request(req, resp){

    var d1 = new Date()

    var str = "<html><body>"
    str += "<h1>Welcome User</h1><h3>Today is "+ d1 + "</h3>"
    str += "<h3>A " + greet.myfun + " to you</h3>"
    str += "</body></html>"
    var size = str.length

    resp.writeHead(200, {
        "Content-Length": size,
        "Content-Type" : "text/html"

    })

    //resp.write(str)
    resp.end(str)

}

let server = http.createServer(process_request)
server.listen(8000, 'localhost')
console.log("The server is running on http://localhost:8000")
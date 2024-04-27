
let http = require("http")

function process_request(req, resp){
    var str = "<h1>Hello World!!</h1>"
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
var events = require('events')
var evtEmitter = new events.EventEmitter()


evtEmitter.on("shout",function(){
    console.log("I am Shouting")
})

evtEmitter.emit("shout")
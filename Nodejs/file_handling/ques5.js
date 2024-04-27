var fs = require('fs')
const { title } = require('process')

var book = [
    {
        bookid: 101,
        title: "The Hunger Games",
        author: "John Johnson",
        sp: 700
    },
    {
        bookid: 102,
        title: "The Alchemist",
        author: "John Johnson",
        sp: 1000
    },
    {
        bookid: 103,
        title: "The Da Vinci Code",
        author: "John Wilson",
        sp: 1200
    },
    {
        bookid: 104,
        title: "ACB",
        author: "Ashiwarya",
        sp: 500
    }
]
str = " "
for (i of book) {
    //console.log(i.sp)
    new_sp = i.sp * 10 / 100
    //console.log(new_sp)

    str = i.bookid + " " + i.title + " " + i.author + " " + new_sp + "\n"


    fs.appendFile('book_data.txt', str, function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("File created")
        }
    })
}
//

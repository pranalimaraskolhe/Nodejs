str = ' '
for(i=0 ; i<10; i++){
    for(j=0; j<i; j++){
        str += i + " "
    }
    str += "\n"
}
console.log(str)


var mod1 = require("./localmodule_ques01")
mod1.myfunc()
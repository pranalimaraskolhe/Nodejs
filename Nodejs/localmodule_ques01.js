function greet() {
    var d1 = new Date()

    hrs = d1.getHours()

    if(hrs<12){
        return "Good Morning"
    }
    else if(hrs>=12 && hrs<=17){
        return "Good afternoon"
    }
    else if(hrs>=17 && hrs>=24){
        return "Good Evening"
    }   
}

//console.log(greet())

exports.myfun = greet()
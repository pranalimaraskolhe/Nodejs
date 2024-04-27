var mod1 = require("./localmodule_ques01")
var mod2 = require("./localmodule_ques02")
var mod3 = require("./localmodule_ques03")


console.log(mod1.myfun)

console.log(mod2.add(5,5))
console.log(mod2.sub(20,5))
console.log(mod2.mul(6,2))
console.log(mod2.div(10,2))
console.log(mod2.sum1(55,99,21,84))
console.log(mod2.min1(95,61,2,87))
console.log(mod2.max1(58,3,6,94))

console.log(mod3.calArea(2))
console.log(mod3.calCircumference(4))
console.log(mod3.calDiameter(4))
console.log(mod3.equiTriangle(2,5,2))
console.log(mod3.areaRect(5,8))
console.log(mod3.perimeterRect(5,8))
console.log(mod3.perimeterTriangle(4,4,4))
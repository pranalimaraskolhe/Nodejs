exports.calArea = (radius) =>{
    return "Area of Circle " + 3.14*radius*radius
}

exports.calCircumference = (radius) =>{
    return "Circumference of circle is " + 2*3.14*radius
}

exports.calDiameter = (radius) =>{
    return "Diameter of circle is " + 2*radius
}

exports.areaRect = (len,bre) =>{
    return "Area of Rectangle is " + len*bre
}

exports.perimeterRect = (len,bre) =>{
    return "Perimeter of Rectangle is " + 2*(len+bre)
}

exports.equiTriangle = (s1,s2,s3) =>{
    if(s1 == s2 == s3){
        return "Equilateral Triangle"

    }else{
        return "Not Equilateral Triangle"
    }
}

exports.perimeterTriangle= (s1,s2,s3) =>{
    return "Perimeter of Triangle is " + (s1+s2+s3)
}
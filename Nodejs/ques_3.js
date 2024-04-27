 var arr = [11,55,48,12,8,34,7,22,95]
 min = arr[0]

 for(i=0; i<arr.length; i++){
    if(min>arr[i]){
        min = arr[i]
    }
 }

 console.log("Snallest number is " + min)
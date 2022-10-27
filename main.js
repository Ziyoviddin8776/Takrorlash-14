let timeOut=setTimeout(function (a,b){
    console.log(a*b)
},2000,10,50)

if(33>20){
    clearTimeout(timeOut)
}

let timeInter=setInterval(function (){
    console.log("Salom")
},2000)

if(33>20){
    clearInterval(timeInter)
}


let arr=new Array(10)
arr.fill(5,0,10)
console.log(arr)

let y=[1,2,3,4,5,6]
let newY=Array.from(y,function (val,key){
    return val*2
})
console.log(newY)

let yangiArr=Array.from({length:5},(val,key)=>{
   return  key+1
})

console.log(yangiArr)

let a=2.4784657;
a=a.toFixed(2)
console.log(a)


let b="25";
// a=Number(a)
b=+b
console.log(typeof b)

let s="25px";
s=Number.parseInt(s)
console.log(s)

let w="25.68pxa";
w=parseFloat(w)
console.log(w)

console.log(Number.isNaN(45))
console.log(Number.isNaN(+"25px"))

console.log(Number.isFinite(43.5))
console.log(Number.isFinite("salom"))
console.log(Number.isFinite("60"))

console.log(Number.isInteger(25.6))
console.log(Number.isInteger(25))
console.log(Number.isInteger("90"))

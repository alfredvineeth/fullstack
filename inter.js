// const arr=[12,45,"hello",2.5,Date()]
// console.log("before change")
// for (var i in arr){
//     console.log(arr[i])
// }
// console.log("aft change")
// arr.push("3rd yr")
// for(var i of arr){
//     console.log(i)
// }
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log("after pop",arr)

// arr.push(365)
// arr.push("khi")
// console.log("after push",arr)
// // arr.pop()
// // arr.pop()
// // arr.pop()
// // console.log("after pop",arr)

// if (arr.length==0){
//     console.log("no element found in arr")
// }

// else {
//     console.log("element found in array r ",arr)
//        
// }

//objects

a = {
    car : "ford",
    model : "fiesta",
    airbags : "Nil",
    wheels : 5,
    color : "white",
}

console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car="BMW"
a.sunroof = {isPresent: "Yes", Shaper: "Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)
for (var ele in a){
    console.log(ele + ":" + a[ele])
    if(typeof a [ele] == "object")
    {
        for (var val in a[ele]){
            console.log(val + ":" + a[ele][val])
        }
    }
}



const a = 120
console.log("trial :" + a)
{
    let a =10
    console.log("error: " + a)
}

a = 15

if (a == 0){
    console.log("the number is 0")
}

else if (a > 0){
    console.log("Number greater than 0")
}

else {
    console.log("Number less than 0")
}

let a = 0
console.log(a)
if (a === 0){
    console.log("The number is 0 adding 1 to make it greater than 0")
    a = a +1
    console.log("a = a + 1 = " + a)
}

else if (a > 0){
    console.log("The number is positive")    
}

else{
    console.log("The number is negative")
}

For loop
a = 5
for (i = 0; i < a; i ++){
    console.log(i)
}

While loop
a = 5
i = 0
while(i <= a){
    console.log(i)
    i ++
}

array = [10,50]
array.forEach(element => console.log(element));
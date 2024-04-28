//for of loop can't use for objct
const myobj=
{
    cpp:"c++",
    rb:"Ruby",
    js:"Javascript"
}
for(key in myobj)
{
    console.log(`${key} :${myobj[key]}`)
}
const arr=[1,3,54,6,7]
for(const i in arr)
{
    console.log(arr[i])
}
const map=new Map()
map.set(1,"one")
map.set(2,"two")
map.set(3,"three")
//console.log(map)
for(const i in map)
{
    console.log(i)//No any output
}
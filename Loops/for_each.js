const arr=["cpp","c","HTML","CSS","Js","Java"]
//forEach taking callBack fn as argument ;
//callback fn doesnt having any name
//It can take max 3 parameters ->value,index,array
//forEach doesn't returning any val
const val=arr.forEach((item)=>
{
    console.log(item)
    return item
})
console.log(val)//undefined
arr.forEach((val,ind,arr)=>
{
    console.log(val+" "+ind+" "+arr)
})
printme=(item)=>
{
    console.log(item)
}
arr.forEach(printme)
//Array of objects
const myArr=[
    {
        language:"python",
        file:"py"
    },
    {
        language:"Java",
        file:"java"
    },
    {
        language:"Javascript",
        file:"js"
    }
]
for(i of myArr)
{
    console.log(i.language)
}
myArr.forEach((item)=>
{
    console.log(item.language)
})
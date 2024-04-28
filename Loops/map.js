//map()->manipulation
//filter()->filter data
//chaining->calling many fun on same ds
const arr=[1,32,43,2,4,56,7]
const res=arr.map((num)=>
{
    return (num+10)
})
console.log(res)
arr.forEach((item)=>
{
     item+=1
})
console.log(arr)//No change in original array
//-------------chaining---------
const ans=arr.filter((item)=>item<10)
            .map((item)=>item-1)
console.log(ans)

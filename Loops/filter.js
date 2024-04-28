const arr=[1,24,54,547,2]
/*The filter method calls the predicate function one
time for each element in the array.
 Returns the elements of an array that meet the condition 
specified in a callback function.*/
const res=arr.filter((item)=>
{
    return item>5
})
//If we open the scope them must use return statement
//()=>item>5   :This will implicitly return item,cause not opening the scope
console.log(res)
//Do this task using for each loop
const resarr=[]
arr.forEach((item)=>
{
    if(item>5)
    {
        resarr.push(item);
    }
})
console.log(resarr)
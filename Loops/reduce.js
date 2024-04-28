const arr=[1,2,4]
/*
1) A function that accepts up to four arguments. 
The reduce method calls the callbackfn function one time for each 
element in the array.
2) Calls the specified callback function for all the elements in an
array. The return value of the callback function is the accumulated 
result, and is provided as an argument in the next call to the 
callback function. 
3)To add all the prices from database of shopping cart 
*/
const ans=arr.reduce((acc,curr)=>
{
    return acc+curr
},3)
console.log(ans)
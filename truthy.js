
const usrmail=""//else block
//usrmail="a@gmail.com"  ->if block
if(usrmail)
{
    console.log("Got the user mail")
}
else
{
    console.log("Dont have usrmail")
}


/*------------------------------
Falsy values
NaN  ,  false ,"" ,null   ,undefined  ,BigInt 0n
*/


/*Truthy Values
"0",[],{},'false'
*/
//----------------------------------

const myobj={
    name:"Nikita"
}
if(Object.keys(myobj))
{
    console.log(Object.keys(myobj))
    //return array of keys if length of this array is 0 then obj is empty
}
//----------------------------------

/*Nullish coalescing  operator ?? :null undefined*/
const val1=null??undefined  //->undefined
console.log(val1)
const val2=null ?? 214//214->To handle error or avoid null and undefined val
console.log(val2)
//-------------------------------
/*Terniary operator*/
const val=(5>3) ? 5:3
console.log(val)


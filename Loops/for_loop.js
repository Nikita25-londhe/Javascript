/*const arr=[1234,32543,565472]
for(var i=0;i<arr.length;i++)//length is property not a fun 
{
    console.log(arr[i])
}
console.log(i)//Its var i hence can access outside scope
//if i is var or const then error
for(let i=2;i<=10;i++)
{
    console.log("Table of "+i)
    for(let j=1;j<=10;j++)
    {
        console.log(i*j)
    }
}
-------------------------------
*/
//Break and continue
for(var i=0;i<5;i++)//length is property not a fun 
{
    if(i==3)break
    console.log(i)//0 1 2 
}

for(var i=0;i<5;i++)//length is property not a fun 
{
    if(i==3)continue
    console.log(i)//0 1 2 4
}



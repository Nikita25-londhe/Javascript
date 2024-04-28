function one()
{
    const username="Nikita"
    function two()
    {
        const web="dfh";
        console.log(username)
    }
    two()
}
one()
if(true)
{
    const user="Nikita"
    if(user==="Nikita")
    {
        const we="ewf";
        console.log(user+" "+we);
    }
}
//console.log(user)
/*Scope of user only inside
{
}*/
console.log(addone(1));
function addone(num)
{
    return num+1;
}
//error    console.log(addtwo(1));
addtwo=function(num)
{
    return num+2;
}
console.log(addtwo(2))


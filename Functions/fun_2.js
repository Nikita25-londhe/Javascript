function calc(val1,...num)
{
    console.log(val1);
    console.log(num);
    //...rest operator convert into array
    //console.log(num);
}
const user=
{
    name:"Nikita",
    price:13234
}
calc(10,20,30);
function show(user)
{
    console.log(user.name ,user.price);
}
show(user);
//passing obj to user
show(
    {
        name:"Nachi",
        price:1323
    }
)
//passing array to fun
const myarr=[1,2,34];
function returnsecondval(myarr)
{
    return myarr[2];
}
console.log(returnsecondval(myarr));
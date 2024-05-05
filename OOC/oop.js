//Creating object
const user=
{
    name:"Nachi",
    id:12,
    isloggedin:true,
    Show:function()
    {
        console.log(this.name);
        console.log(this.id);
        console.log(this.isloggedin)
        console.log(this)
    }
}
user.Show()
//This printing current context
console.log(this)
function userdetail(name,id)
{
    this.name=name;
    this.id=id;
    return this;//optional
}
const usr1=new userdetail("ndf",34235);
const usr2=new userdetail("abc",1324)
console.log(usr1.constructor);
console.log(usr1);
console.log(usr2)

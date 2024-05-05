function setUsername(name)
{
    this.name=name;
}
function create(name,email,password)
{
    //call no need in classes use super
    //call ->it passes current execution context to calling function
    setUsername.call(this,name);
    this.email=email
    this.password=password
}
const usr=new create("nikita","abc@gmail.com",13);
console.log(usr);

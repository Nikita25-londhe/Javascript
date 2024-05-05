class user
{
    constructor(name)
    {
        this.name=name;
    }
    logme()
    {
        console.log(`Username is ${this.name}`)
    }
}
class Teacher extends user
{
    constructor(name,email,password)
    {
        super(name);
        this.email=email;
        this.password=password;
    }
    addcourse()
    {
        console.log("course is added by"+this.name);
    }
}
const obj=new Teacher("mno",'s@gmail.com',325);
console.log(obj.addcourse())
const obj2=new user("asd");
console.log(obj2.logme());
console.log(obj instanceof Teacher)
console.log(obj instanceof user)
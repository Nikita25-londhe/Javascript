class user
{
    constructor(name)
    {
        this.name=name;
    }
    logme()
    {
        console.log(`username is ${this.name}`)
    }
    //static->method not accessible to all object
    static createId()
    {
        return 123;
    }
}
class Teacher extends user
{
    constructor(name,email)
    {
        super(name);
        this.email=email;
    }
}   
const obj=new Teacher("abn","a@gmail.com");
console.log(obj.createId());
obj.logme();
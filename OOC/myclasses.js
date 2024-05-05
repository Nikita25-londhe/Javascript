//ES6
/*class usr
{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    //Should not write function keyword
    encrypt()
    {
        return `${this.password}abc`
    }
    changeusrname()
    {
        return this.username.toUpperCase();
    }
}
const obj=new usr("rt","d@gmail.com",123);
const obj2=new usr("nngfhngj",'d',45)
console.log(obj.encrypt());
console.log(obj.changeusrname())
console.log(obj2.encrypt());
console.log(obj2.changeusrname())
*/
const usr=function(username,email,password)
{
        this.username=username;
        this.email=email;
        this.password=password;
}
usr.prototype.changeusrname=function()
{
    return `${this.username.toUpperCase()}`;
}
usr.prototype.encrypt=function()
{
    return this.password+"abc";
}
const obj=new usr("rt","d@gmail.com",123);
const obj2=new usr("nngfhngj",'d',45)
console.log(obj.encrypt());
console.log(obj.changeusrname())
console.log(obj2.encrypt());
console.log(obj2.changeusrname())


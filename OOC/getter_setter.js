class user
{
    constructor(email,password)
    {
        this.email=email;
        this.password=password;
    }

    /* get set fun name should be same as property
    If we only define get typerror: Cannot set property email of so must define set*/
    /*Use of getter:This functionality enables you to encapsulate the internal state of an object and implement additional logic, such as validation or computation, when retrieving a property's value. */
    get email()
    {
        return this._email+"encrypt"
    }
    set email(val)
    {
        this._email=val;
    }
    /*if uses email as property RangeError: Maximum call stack size exceeded
    This behavior is a result of the automatic invocation of getter and setter methods when accessing and setting properties.*/
}
const obj=new user('a@gmail.com',123);
console.log(obj.email)

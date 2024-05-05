//All array,string ,function are objects in js
function create(name,id)
{
    this.name=name;
    this.id=id;
}
create.prototype.increment=function()
{
    this.id++;
}
create.prototype.print=function()
{
    console.log(this.name)
}
const usr1=new create("Radha",35);
const usr2=new create("mina",354);
console.log(usr1.print());
/*
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation 
of a new JavaScript object.

A prototype is linked: The newly created object gets linked to 
the prototype property of the constructor function. This means that 
it has access to properties and methods defined on the constructor's
 prototype.

The constructor is called: The constructor function is called with 
the specified arguments and this is bound to the newly created 
object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/ 
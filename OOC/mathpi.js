//Object.defineProperty(obj, prop, descriptor)
const obj=
{
    name:"Nikita",
    id:12
}
Object.defineProperty(obj,'name',
{
    writable:false,
    enumerable:false
})
//Object.getOwnPropertyDescriptor(obj, prop)
const d=Object.getOwnPropertyDescriptor(obj,'name');
console.log(d)
console.log(Math.PI)
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
/*In this pi property descriptor writable =false hence 
any change made by us not reflected*/
Math.PI=3.2;
console.log(Math.PI);//It still print 3.14159
//Now,enumerable means not iteratble

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
//name is not iterable hence only print id

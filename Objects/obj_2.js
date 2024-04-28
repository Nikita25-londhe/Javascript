/*hasOwnProperty(),Object.keys(obj),Object.values(obj),Object.assign(...obj1,...obj2)
Object.entries(obj) */
//singleton obj
const user=new Object();
//const user={};Not a singleton obj
user.id=123;
user.name="NIKi";
user.islog=false;
//console.log(user);
const user1=
{
    id:121,
    name:
    {
        first:"Niki",
        middle:"rajendra",
        last:"Londhe"
    },
    roll:21241
}
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//console.log(user1.name.first);
obj3={...obj1,...obj2}
//const obj3=Object.assign(obj1,obj2);
console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty('1'));






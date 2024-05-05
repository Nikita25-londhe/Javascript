
/* 

Array      \
            \
function ---- >Object->NULL
            /
string     /
 
*/
Object.prototype.truelength=function()
{
    console.log(`True length is ${this.trim().length}`)
}
const name="Miranada          ";
console.log(name.truelength())
/*const obj=
{
    name:"abc"
}
obj.truelength();
const arr=[13,34];
arr.truelength();*/
const Person=
{
    name:"xyz",
    age:18
}
const Teacher=
{
    id:1,
    college:"PICT",
    __proto__:Person
}
const Student=
{
    roll:13,
    div:2,
    __proto__:Person//creating other obj as datamember
}
console.log(Student.__proto__.age);
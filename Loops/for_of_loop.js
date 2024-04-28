/*for(iterator of object )
{

}*/
/*const arr=[1,3,4,5,7]
for(const num of arr)
{
    console.log(num)
}
const greetings="Hello Niki"
for(const ch of greetings)
{
    console.log(`char of greetings is ${ch}`)
}
//-----------------
*/
//Map
const map=new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")
console.log(map)
for(const  [key,val]  of map)
{
    console.log(key+":"+val);
}
const myobj=
{
    name:"Nikita",
    id:214324
}
/*for(const key of myobj)
{
    console.log(key)//myobj is not iterable
}*/

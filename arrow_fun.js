const name="ndifbe"
const usr=
{
    name:"Nikita",
    price:324232,
    welcome:function wel()
    {
       console.log(`${this.name} welcome user`)
       console.log(this)
//If not use this then ndifbe will take as name
    }

}
usr.welcome()
usr.name="nachi"
//console.log(this) =>{}
usr.welcome();
function chai()
{
    const username="Niki";
    console.log(this.username)//undefined
}
//Arrow function
chai()
const chai1=()=>{
    console.log("Hello")
    console.log(this)//{}
}
chai1()
const addtwo=(a,b)=>
{
    return a+b;
}
console.log(addtwo(3,5));
const add=(a,b)=> a+b;//No need to write return keyword But dont 
//mention {}
console.log(add(1,2));
//Always return object in {}
const myfun=()=>({username:"Nikita"})
console.log(myfun())




//singleton
//object literals
const my=Symbol("key1");
const user={
    name:"NIkita",
    "Full":"NIKIta Londhe",//Afvantage of using [] FULL cant be access by .
    id:21241,
    [my]:"mykey",
    location:"Nagar",
    email:"londheniki@gmail.com",
    islogin:true,
    lastlogindays:["Mon","Tiue"]
}
//Object.freeze(user);
//After freeze any change will not reflect
console.log(typeof(user["my"]));
console.log(typeof(my));
console.log(user)
user.name="Nachiket";
console.log(user)
user.greet=function()
{
    console.log(`Hello ${this.name}`);
}
console.log(user.greet());

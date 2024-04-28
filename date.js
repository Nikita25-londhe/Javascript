//1 January 1970
/*let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleString());*/
/*let d=new Date(2024,9,25,5,6,0)//month Jan->0
console.log(d.toDateString())
let m=new Date("2024-1-25");// month jan->1
console.log(m.toDateString());
let j=new Date("25-02-2024");// month jan->1
console.log(j.toLocaleDateString());*/
let my=new Date(2004,9,25);
console.log(my.toLocaleString('default',
    {
        weekday :"long"
    }
))
let time=Date.now();
console.log(time);





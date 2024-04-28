/*const myarr=[10,20,30];
const arr=new Array(1,23,4);
arr.push(45);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(9); //adds at starting position
arr.shift();
//arr[0]=9;
console.log(arr.includes(9));//true or false
console.log(arr.indexOf(1));*/
const arr=new Array(1,23,4,456);
console.log(arr.join());//1,23,4
console.log(typeof(arr.join()));//string
console.log(arr.slice(1,3));
console.log(arr.splice(1,3));
console.log(arr);
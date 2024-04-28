const arr=new Array(1,2,4);
const arr2=new Array('A','B','C');
console.log(arr);
console.log(arr2);
//arr.push(arr2);
/*console.log(arr);
console.log(arr2);
arr.pop();
console.log(arr);*/
//console.log(arr[3][1]);
console.log(arr.concat(arr2));
console.log(arr);
console.log([...arr,...arr2]);//used t concat must print using console
const a=[12,[23,4],[123,33,[24],2]];
console.log(a.flat(Infinity));
console.log(Array.isArray("Nikita"))//return boolean
console.log(Array.from("NIKiTA"));
console.log(Array.of(1,23,454));

//map filter and reduce

// array map method
let arr=[23,56,78,90];
let a=arr.map((value, index, array)=>{
   console.log(value,index,array);
   return value+3
})
console.log(a);

//array filter method
// let arr2=[12,43,14,18,90,45];
// let g=arr2.filter((value)=>{
//       return value<19
// });
// console.log(g);

//array reduce method
// let arr3=[1,2,3,4,5,6];
// let fdc=arr3.reduce((value,index)=>{
//      return value+index;
//     })
// console.log(fdc);
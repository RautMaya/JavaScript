///Question 1
const arr = [10,3,60,5,56,98,50];

arr.push(22,33,44,55);
console.log(arr);


///Question 2
let a=arr.filter((value)=>{
    return value%10== 0
})
console.log(a);
let num;
let a1= arr.map((num)=>{
    return num*num;
})
console.log(a1);
console.log(a);

//Question 3

let arr2 = [1,2,3,4,5,6];

let a3 = arr2.reduce((h1,h2) =>
{
    return h1*h2;
})
console.log(a3);
console.log(arr2);


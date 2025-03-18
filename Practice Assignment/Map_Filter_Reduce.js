/// Map Method
const arr =[25,36,24]

let a= arr.map((value,index,array) =>
{
  console.log(value,index,array)
  return value +1
})
console.log(a)

/// Filter Method 

let arr2 = [25,63,6,8,95,4]

let a2 = arr2.filter((NewArray) => 
{
    return NewArray <10
})
console.log(a2)

/// Reduce Method

let arr3=[1,2,3,5,4]

let Newarr = arr3.reduce((element1 , element2) =>
     {
    return element1+element2
})
console.log(Newarr)

/// Example 2 Reduce_Method
let arr4=[2,3,2,2]

const Reduce_Fun =(a,b)=>
{
    return a*b
}
let NewArray1 = arr4.reduce(Reduce_Fun)
console.log(NewArray1)



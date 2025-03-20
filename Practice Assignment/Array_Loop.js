let num = [1,2,3,4,5,6]

for(let i=0;i<num.length;i++)
{
    console.log(num[i])
}

/// ForEach Loop

num.forEach((element) => {
    console.log(element*element)
})

///Array.From

let Name = "Maya and"
let arr =Array.from(Name)
console.log(arr)

///For_Of loop

for(let i of num)
{
    console.log(i)
}

///For_in Loop

for(let i in num)
{
    console.log(i)
}
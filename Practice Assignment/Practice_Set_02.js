/// Q 1

let a = prompt("Enter a Name");

let age = Number.parseInt(a)

if(age < 20 )
{
    let result =console.log("Do not drive");
}
else if(age > 21 || age < 45)
{
    result =console.log("You Can Drive Safely");
}
else if(age > 46)
{
    result =console.log("dont be drive");
}
else{
    result =console.log("Enter Valid Age");
}
console.log(result);


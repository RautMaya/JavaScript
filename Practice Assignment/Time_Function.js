/// How many Time to tack 

console.time("forloop");

for(let i=0;i<5;i++)
{
    console.log(i);
}
console.timeEnd("forloop");


/// while Loop

console.time("WhileLoop");
let i =0;
while(i<5)
{
    console.log(i);
    i++;
}
console.timeEnd("WhileLoop");
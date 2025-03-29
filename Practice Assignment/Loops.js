let Marks = {
    Priti : 90,
    swati : 50, 
    Punam : 60,
    Subham : 45
}
///For Loop

for(let i=0 ; i<Object.keys(Marks).length;i++)
{
    console.log("The Marks Of " + Object.keys(Marks)[i] + " are " + Marks[Object.keys(Marks)[i]])
}

/// For In loop

for(let i in Marks)
{
    ///console.log(i)
    console.log("The Marks of " + i + " are " + Marks[i]);
}

const arrow = (a,b,c,d) => {
  return (a+b+c+d)/4;
}
console.log(arrow(4,5,6,8));
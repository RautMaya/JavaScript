let name1 = "Friend";
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLocaleLowerCase());

console.log(name1.slice(2,4)) ; /// Slice
console.log(name1.slice(2));

console.log(name1.replace("end","day")); /// Replace 

let name2 = "Oosam";
console.log(name1.concat(" is Our Group Circle is ",name2));

let name3 = "      Oosam    ";
console.log(name3);
console.log(name3.trim());

let fr = "Shivika";

for(let i=0;i<fr.length;i++)
{
    console.log(fr[i]);
}
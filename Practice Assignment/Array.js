let Marks_Of_Student = [95,65,85,65,85,"Not Present"]

console.log(Marks_Of_Student)
console.log(Marks_Of_Student[0])
console.log(Marks_Of_Student[1])
console.log(Marks_Of_Student[2])
console.log(Marks_Of_Student[3])
console.log(Marks_Of_Student[4])
console.log(Marks_Of_Student[5])

console.log(Marks_Of_Student)

Marks_Of_Student[5] = 55

console.log(Marks_Of_Student)
console.log(Marks_Of_Student.length)
console.log(typeof Marks_Of_Student)


/// If We Print Above Array Use of For Loop

for(let i=0;i<Object.keys(Marks_Of_Student).length;i++)
{
    console.log(Marks_Of_Student[i]);
}
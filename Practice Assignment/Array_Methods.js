let Student_Marks = [50,65,98,78,85];

console.log(Student_Marks);

console.log(Student_Marks.join("_"));

console.log(Student_Marks.pop());
Student_Marks.pop();   /// remove end of the array
console.log(Student_Marks);

Student_Marks.push(99); /// Add end of the array
console.log(Student_Marks);

Student_Marks.shift();  /// Remove Beganing of the array
console.log(Student_Marks);

Student_Marks.unshift(22);    /// Add Beganing of the array
console.log(Student_Marks);



delete Student_Marks[0];
console.log(Student_Marks);
console.log(Student_Marks.length);

let Mark_1 = [11,712,193];
let Mark_2 = [241555555555,522,723];
let Mark_3 = [831,312,303];

let New_Array = Mark_1.concat(Mark_2,Mark_3);
console.log(New_Array);

/// Sort

New_Array.sort();
console.log(New_Array);


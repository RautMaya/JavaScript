let Student
{
    let Roll = 101;
    var Name ="Maya";

    console.log(this.Roll);

    ///console.log(Student.Name);
    function Mark()
    {
        let Col = "Maya";
        console.log("Hellow ," + Student.Roll);
    }
    console.log("Hellow ," + Mark.Col);
}
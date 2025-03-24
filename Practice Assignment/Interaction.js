alert("Enter Your Name");
let Name = prompt("Enter Name" , "BCS Student");
alert("Your name Type" + typeof(Name))

let Write = confirm("Do you want to Write")
if(Write){
    document.writeln(Name);
}
else{
    document.writeln("Allow Me to Show your text")
}

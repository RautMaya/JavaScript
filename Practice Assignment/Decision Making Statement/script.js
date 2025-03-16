const UserName = prompt('Enter Your Name') || `Procoder`
const UserAge = parseInt(prompt('Enter Your age')) || 22

console.log(`Name : ${UserName}`)
console.log(`Age : ${UserAge}`)

if (UserAge > 2 && UserAge <= 7) {

    console.log(` ${UserName} He/She is a Kid`);
}

else if (UserAge > 8 && UserAge < 18) {

    console.log(` ${UserName} He/She  is School student`);
}

else if (UserAge > 18 && UserAge < 21) {

    console.log(` ${UserName} He/She is College Student`);
}
else if (UserAge > 22 && UserAge < 45) {

    console.log(` ${UserName} He/She is Working Profestional`);
}
else if (UserAge > 46 && UserAge <= 65) {

    console.log(` ${UserName} He/She is Working as a retired post`);
}

else if (UserAge > 65 && UserAge < 110) {

    console.log(` ${UserName} He/She is Age Person`);
}
else if (UserAge < 0) {

    console.log(` please Enter Correct Age`);
}

console.log(`Program is Ended!!`);
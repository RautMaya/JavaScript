
let age = 12;

if((age >= 10) && (age < 20))
{
    console.log("Age is lies Between 10 and 20")
}
else
{
    console.log("Age Does not lies Between 10 and 20")
}

let Day;

Day =prompt("Enter a number 1-7");


switch (Day)
{
    case 1 : console.log("Sunday");
    break;
    case 2 : console.log("Monday");
    break;
    case 3 : console.log("Tuesday");
    break;
    case 4 : console.log("Wensday");
    break;
    case 5 : console.log("Thruesday");
    break;
    case 6 : console.log("Friday");
    break;
    case 7 : console.log("Saturday");
    break;

    case 8 : console.log("Invalid Number");
    break;

}

document.getElementsByClassName("a")[0].style.color = "red";
document.getElementsByClassName("a")[1].style.color = "yellow";
document.getElementsByClassName("a")[2].style.color = "red";


 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

Array.from(document.getElementsByTagName("h3")).forEach(element => {
    element.style.background = "green";
});

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



// console.log(CurrentTime);

setInterval(() => {
    let CurrentTime = new Date();

hr.innerHTML = (CurrentTime.getHours()<10?"0":"") + CurrentTime.getHours();
min.innerHTML = (CurrentTime.getMinutes()<10?"0":"") + CurrentTime.getMinutes();
sec.innerHTML = (CurrentTime.getSeconds()<10?"0":"") + CurrentTime.getSeconds();
}, 1000);

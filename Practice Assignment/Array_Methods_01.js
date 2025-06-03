///Sort Method

let Compare = (a,b) => {
    return a - b;
}

let num = [25,69,56,2,89,4,65,1];
num.sort(Compare);
console.log(num);

num.reverse();
console.log(num);

///Splice 
let num2 = [25,69,56,2,89,4,65,1];

num2.splice(2,4,1021,1021,1021,1021);
console.log(num2);

let num3 = [12,56,98,45,6,3];
num3.slice(2,6);
console.log(num3);

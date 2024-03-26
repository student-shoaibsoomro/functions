function myifelse() {
    let edUcation = "Middle";
    if (edUcation >= "MBA" && edUcation <= "Graducation") {
        console.log("Salary will be 1.5lac");
    }
    else if (edUcation >= "Graduation" && edUcation <= "B.Com") {
        console.log("Salary will be 90k");
    }
    else if (edUcation >= "B.Com" && edUcation <= "Inter") {
        console.log("Salary will be 50k");
    }
    else if (edUcation >= "Inter" && edUcation <= "Matric") {
        console.log("Salary will be 35k");
    }
    else if (edUcation === "Matric") {
        console.log("Salary will be 25k");
    }
    else {
        console.log("Sorry You have to get Education!");
    }
}
myifelse();
function mySum() {
    let num = 12;
    let num2 = 12;
    console.log(num + num2);
}
mySum();
function mySub() {
    let num1 = 50;
    let num2 = 25;
    console.log(num1 - num2);
}
mySub();
function myMultiplication() {
    let num1 = 20;
    let num2 = 10;
    console.log(num1 * num2);
}
myMultiplication();
// force = ma
function forceCalc() {
    let m = 10;
    let a = 20;
    let force = m * a;
    console.log(force);
}
forceCalc();
function myforce() {
    let a = 30;
    let m = 50;
    let force = m * a;
    console.log(force);
}
myforce();
function myDigit(a, b) {
    let sum = a + b;
    console.log(sum);
}
myDigit(20, 90);
function myIntro() {
    let mySelf = "My name is Shoaib Siddiq ";
    let myHobby = "I like swimming ";
    let myLikes = "Usually I go for long drive and watching sunset with the cup of tea.";
    console.log(mySelf + myHobby + myLikes);
}
myIntro();
function digits(a, b) {
    let sum = a + b;
    console.log(sum);
}
digits(50, 30);
export {};


function myifelse(){
    let edUcation: string = "Middle";
    if(edUcation >= "MBA" && edUcation <= "Graducation"){
        console.log("Salary will be 1.5lac");

    }else if(edUcation >= "Graduation" && edUcation <= "B.Com"){
        console.log("Salary will be 90k");

    }else if(edUcation >= "B.Com" && edUcation <= "Inter"){
        console.log("Salary will be 50k");

    }else if(edUcation >= "Inter" && edUcation <= "Matric"){
        console.log("Salary will be 35k");

    }else if(edUcation === "Matric"){
        console.log("Salary will be 25k");

    }else{
        console.log("Sorry You have to get Education!");
    }
}
myifelse();

function mySum(){
    let num: number = 12;
    let num2: number = 12;
    console.log(num + num2);
}
mySum();

function mySub(){
    let num1: number = 50;
    let num2: number = 25;
    console.log(num1 - num2);
}
mySub()

function myMultiplication(){
    let num1: number = 20;
    let num2: number = 10;
    console.log(num1 * num2);
}
myMultiplication();

// force = ma

function forceCalc(){
    let m = 10;
    let a = 20;
    let force = m*a;
    console.log(force);
}
forceCalc();

function myforce(){
    let a: number = 30;
    let m: number = 50;
    let force = m*a;
    console.log(force);
}
myforce();

function myDigit(a: number, b: number,){
    let sum = a + b
    console.log(sum);
}
myDigit(20,90);

function myIntro(){
    let mySelf: string = "My name is Shoaib Siddiq ";
    let myHobby: string = "I like swimming ";
    let myLikes: string = "Usually I go for long drive and watching sunset with the cup of tea."
    console.log(mySelf + myHobby+ myLikes);
}
myIntro()

function digits(a: number, b: number){
    let sum = a + b
    console.log(sum);
}
digits(50,30);


/* $("#btn1").on("click", function(){
    $("#div1").css({"background-color": "red", "width": "90%"});
    $("#div2").css({"background-color": "blue", "width": "80%"});
    $("#div3").css({"background-color": "blue", "width": "80%"});
    let divcontent = $("#div4").html();
    $("#div1").html(divcontent);
});
$("#btn2").on("click", function(){
    $("#div1").css({"background-color": "red", "width": "90%"});
    $("#div2").css({"background-color": "blue", "width": "80%"});
    $("#div3").css({"background-color": "blue", "width": "80%"});
    let divcontent = $("#div4").html();
    $("#div1").html(divcontent);
});
$("#btn3").on("click", function(){
    $("#div1").css({"background-color": "red", "width": "90%"});
    $("#div2").css({"background-color": "blue", "width": "80%"});
    $("#div3").css({"background-color": "blue", "width": "80%"});
    let divcontent = $("#div4").html();
    $("#div1").html(divcontent);
}); */

function changeColorAndContent(){
    $("#div1").css({"background-color": "red", "width": "90%"});
    $("#div2").css({"background-color": "blue", "width": "80%"});
    $("#div3").css({"background-color": "blue", "width": "80%"});
    let divcontent = $("#div4").html();
    $("#div1").html(divcontent);
};

$("#btn1").on("click", function(){
    changeColorAndContent();
});
$("#btn2").on("click", function(){
    changeColorAndContent();
});
$("#btn3").on("click", function(){
    changeColorAndContent();
});

function CalculateSum(number1, number2){
    let Sum = number1 + number2;
    return Sum;
};
let Answer = CalculateSum(10, 13);
console.log(Answer);
console.log(CalculateSum(10,13));
console.log(CalculateSum(20,14));

$("#calc-btn").on("click", function(){
    let input1Value = Number($("#input1").val());
    let input2Value = Number($("#input2").val());
    let calculationResult = CalculateSum(input1Value , input2Value);
    $("#result").html("The result of the calculation is " + calculationResult + ".");
});

let ArrayOfStrings = ["", "apple", "pear", "", "strawberry"];
let NewStringsArray = ArrayOfStrings.filter(function(el){
    return el !== "";
});
console.log(NewStringsArray);

let ANewString = "Hello";
let ANewStringLength = ANewString.length;
console.log(ANewStringLength);

typeof("hello"); /* returns "string" in console */
typeof(123); /* returns "number" in console */
typeof(true); /* returns "boolean" in console */
typeof(["apple", "orange", "pear"]); /* returns "object" in console; arrays are considered objects */


let myVariable1 = "hello";
let myVariable2 = 123;
let myVariable3 = true;
let myVariable4 = ["apple", "orange", "pear"];

console.log(typeof("hello"));
console.log(typeof(myVariable1));
/*the 2 lines above both will write "string" in javascript console*/

console.log(typeof(123));
console.log(typeof(myVariable2));
/*the 2 lines above both will write "number" in javascript console*/

console.log(typeof(true));
console.log(typeof(myVariable3));
/*the 2 lines above both will write "boolean" in javascript console*/

console.log(typeof(["apple", "orange", "pear"]));
console.log(typeof(myVariable4));
/*the 2 lines above both will write "object" in javascript console*/
/* console.log("Hello, World!");
console.log(1000 + 1000);
console.log("1000" + "1000");
console.log(true);
console.log("true"); */

/* console.log is to debug for devs */

/* let MyVariable;
MyVariable = "Hello, ";
let MyVariable2 = "World!";
let MyVariable3 = MyVariable + MyVariable2;
console.log(MyVariable3); */

/*
= is used to assign variables in js
always use "let" to declare a variable
you can declare and assign a variable on the same line
*/

/* let MyNumber1 = 1000;
let MyNumber2 = 2000;
let MyNumber3 = MyNumber1 + MyNumber2;
console.log (MyNumber3); */

/*
in browser's console, the left side will show the name of the js file and the number of the line of the console log entry
*/

/* let CombinedVariable = MyVariable3 + MyNumber3;
console.log (CombinedVariable); */

/*
the combination of any string with a number will convert everything in into a string
*/

/* let CombinedVariable2 = MyVariable3 + MyNumber1 + MyNumber2;
console.log (CombinedVariable2); */

/*
everything will be converted into a string rather than combine similar inputs first
*/

/*
recommended to use let in general, but var can be used in specific instances

this is because it will be removed from the web cache after it is executed whereas var will remain the entire time
*/

/* $(".button1").on("click", function(){

if(true == true){
        var MyVariable1 = 100;
        let MyVariable2 = 200;
        console.log(MyVariable1);/*output will be 100*//*
        console.log(MyVariable2);*//*output will be 200*//*
    };
    console.log(MyVariable1);*//*out put will be 100*//*
    console.log(MyVariable2);*//*Uncaught ReferenceError: MyVariable2 is not defined*//*
}) */

/*
let defined variables are bound to blocks it is in

var defined variables can be accessible outside their blocks

variables are case sensitive, so be careful when naming them
*/

/* let MyRandomInteger1 = Math.ceil(Math.random() * 100);
console.log(MyRandomInteger1); */

/* 
.ceil rounds up

.floore rounds down
*/

$(".button1").on("click", function(){
    $("body").append('<div class="redblock"></div>');
    /* 
    single quote on outer and double quote on inner 
    */
});

$(".button2").on("click", function(){
    $("body").prepend('<div class="redblock"></div>');
});

/* 
append adds at end while prepend adds at beginning
*/

let MyInterval = setInterval(function(){
    $("body").prepend('<div class="redblock"></div>');
}, 1000);

/* 
every second is 1000
*/

$(".button3").on("click", function(){
    clearInterval(MyInterval);
})
let firstArray = []; /* empty array */

let myArray = ["hello", 100, true]; /* array with content */

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
/* [0, 1, 2]; where the content starts at "0" and goes up after each comma */

let fruits = [];
fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "banana";

console.log(fruits[0]); /* "apple" */
console.log(fruits[1]); /* "orange" */
console.log(fruits[2]); /* "banana" */
console.log(fruits[3]); /* undefined */

console.log(fruits);

let animals = [];
animals.push("dogs");
animals.push("cats");
animals.push("rabbits");
console.log(animals[0]); /* "dogs" */
console.log(animals[1]); /* "cats" */
console.log(animals[2]); /* "rabbits" */
console.log(animals[3]); /* undefined */
/* .push adds an element to array at the end */


let shapes1 = ["rectangle", "square", "circle", "triangle"];
shapes.shift(); /* "rectangle" is removed */
console.log(shapes1);
/* .shift() will remove the first element in the array */

let shapes2 = ["rectangle", "square", "circle", "triangle"];
shapes.pop(); /* "triangle" is removed */
console.log(shapes2);
/* .pop() will remove the last element in the array */


let furnitures = ["chair", "table", "desk", "closet", "sofa"];
furnitures.splice(2, 1, "house"); /* removes 1 element starting from the third element/position 2 and adds "house" in its place */
console.log(furnitures);
/* .splice(x, y, "element") removes y amount of elements from the x position and replaces them with an element or elements */


let mydivContent = $("#mydiv").html();
console.log(mydivContent);
/* collects content from div */
$("#yourdiv")
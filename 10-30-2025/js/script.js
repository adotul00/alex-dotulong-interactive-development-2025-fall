/* setTimeout(function(){
    $("body").css({"background-color": "red"})
}, 3000); */
/* waits a certain amount of time to do something */

/* $("#btn").on("click", function(){
    setTimeout(function(){
        $("body").css({"background-color": "red"})
    }, 3000)
}); */

/* console.log($("#div1").width());
console.log($("#div1").outerWidth());
console.log($("#div2").width());
console.log($("#div2").outerWidth()); */
/* width only shows width excluding padding and border, while outerWidth shows width including padding and border. */

/* $("#div1").outerWidth(600);
$("#div2").width(600); */
/* best to use box-sizing in CSS and outerWidth/outerHeight in jQuery. */

/* let div2width = $("#div2").css("width");
let div2BackgroundColor = $("#div2").css("background-color");
let div2OuterWidth = $("#div2").outerWidth();

console.log("width of div2: " + div2width);
console.log("outerWidth of div2: " + div2OuterWidth);
console.log("background-color of div2: " + div2BackgroundColor); */

$("#div1").css("background-color", "yellow");
$("#div1").css("width", "700px");
$("#div2").css({"background-color": "green", "width": "700px"});
/* using the {} is the recommended way since you can set multiple properties in one line rather than multiple lines */
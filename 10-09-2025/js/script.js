/* document.querySelectorAll("p").forEach(function(element){element.style.color = "red"}); */

/* $("p").css({"color":"green"}); */ /* highest priority */

/* $("p").on("click", function(){
 */    /* $("h1").css({"color":"red"}) */
    /* if($("p").hasClass("colored-text")){
        $("p").removeClass("colored-text");
    }else{
        $("p").addClass("colored-text");
    };
}) */

/* $("p").on("click", function(){
    $("p").toggleClass("colored-text");
}) */

$("p").on("click", function(){
    $(this).toggleClass("colored-text");
})
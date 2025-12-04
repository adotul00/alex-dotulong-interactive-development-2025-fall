$(document).ready(function(){

    let $pulseFast = $("#pulse-fast");

    $(document).on("mousemove", function(e){
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        $pulseFast.css({
            left: cursorX + "px",
            top: cursorY + "px"
        });
    });

    /* let $click = $("#click-me"); */

    $("#click-me").on("click", function(){
        $("html").css("background-color", "white");
    })

    /* let circle = $("#pulse-fast");
    let cursorX = 0;
    let cursorY = 0;

    let $pulseFast = $("#pulse-fast");

    $(document).on("mousemove", function(e){
        cursorX = e.pageX;
        cursorY = e.pageY;

        $pulseFast.css({
            left: cursorX + "px",
            top: cursorY + "px"
    }); */

    /* function pulseCircle() {
        let circleLeft = parseFloat(circle.css("left"));
        let circleTop = parseFloat(circle.css("top"));

        let newLeft = circleLeft + (cursorX - circleLeft) * 0.1;
        let newTop = circleTop + (cursorX - circleTop) * 0.1;

        circle.css({
            left: newLeft + "px",
            top: newTop + "px"
        });

        requestAnimationFrame(pulse);
    }

    pulseCircle(); */

/*     setInterval(function(){
        $(".text").append('<div class="fitdevexwide text1">I swear I put it right here...<div>')
    }, 3000); */
})
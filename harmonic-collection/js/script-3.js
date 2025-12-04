$(document).ready(function(){

    $(document).on("mousemove", function(e){

        let $pulseFast = $("#pulse-fast");
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let circleWidth = $pulseFast.width();
        let circleHeight = $pulseFast.height();

        let newLeft = cursorX - (circleWidth / 2);
        let newTop = cursorY - (circleHeight / 2);

        $pulseFast.css({
            left: newLeft + "px",
            top: newTop + "px"
        });

        /* let cursorX = e.pageX;
        let cursorY = e.pageY;

        $pulseFast.css({
            left: cursorX + "px",
            top: cursorY + "px"
        }); */
    });

    let $click = $("#click-me");
    let bgColor = $("html").css("background-color");

    $click.on("click", function(){
        if (bgColor === "black"){
            $("html").css("background-color", "white");
        } else {
            $("html").css("background-color", "black");
        }
    });

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
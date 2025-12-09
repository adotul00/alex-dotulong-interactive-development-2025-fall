$(document).ready(function(){

    let $cursorFollow = $("#follow");

    let mouseMoveTimer;
    const delayTime = 100;

    $("#follow").on("mouemove", function(e){
        clearTimeout(mouseMoveTimer);

        mouseMoveTimer = setTimeout(function(){}, delayTime);
    })

    $(document).on("mousemove", function(e){
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        $cursorFollow.css({
            left: cursorX + "px",
            top: cursorY + "px"
        });
    });

/*     setInterval(function(){
        $(".text").append('<div class="fitdevexwide text1">I swear I put it right here...<div>')
    }, 3000); */
})
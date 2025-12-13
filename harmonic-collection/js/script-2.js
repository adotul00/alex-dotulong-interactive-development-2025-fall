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

    let textString = "Am I being followed? I thought I heard something. Who's there?! Oh, it was just a cat.";

    let textArray = textString.split(" ");
    

/*     setInterval(function(){
        $(".text").append('<div class="fitdevexwide text1">I swear I put it right here...<div>')
    }, 3000); */
})
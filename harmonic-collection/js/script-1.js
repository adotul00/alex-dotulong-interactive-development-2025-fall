$(document).ready(function(){
    let randomNumber = Math.random();

    let fixedX = $(window).width() * randomNumber;
    let fixedY = $(window).height() * randomNumber;

    $("body").append('<div id="search-target">you found it</div>');
    $("#search-target").css({"left": fixedX + "px", "top": fixedY + "px"});
    $("#search-target").on("click",function(){
        location.reload();
});

    $(document).on("mousemove", function(e){
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let distance = Math.sqrt(Math.pow(cursorX - fixedX, 2) + Math.pow(cursorY - fixedY, 2));

        let maxDistance = Math.sqrt(Math.pow(fixedX, 2) + Math.pow(fixedY, 2));
        let blueValue = Math.floor((distance / maxDistance) * 256);

        let red = 255 - blueValue;
        let blue = blueValue;
        let green = 0;

        $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    });

/*     setInterval(function(){
        $(".text").append('<div class="fitdevexwide text1">I swear I put it right here...<div>')
    }, 3000); */
})
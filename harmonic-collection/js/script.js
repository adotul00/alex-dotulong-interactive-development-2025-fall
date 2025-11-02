$(document).ready(function(){
    let randomNumber = Math.random();

    let fixedX = $(window).width() * randomNumber;
    let fixedY = $(window).height() * randomNumber;

    $(document).mousemove(function(e){
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let distance = Math.sqrt(Math.pow(cursorX - fixedX, 2) + Math.pow(cursorY - fixedY, 2));

        let maxDistance = Math.sqrt(Math.pow(fixedX, 2) + Math.pow(fixedY, 2));
        let colorValue = Math.min(255, Math.floor((distance / maxDistance) * 255));

        let red = 255 - colorValue;
        let blue = colorValue;
        let green = 0;

        $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    });
})
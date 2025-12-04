$(document).ready(function(){

    function randomColor(){
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $(document).on("click", function(){
        let newColor = randomColor();
        $("html").css("background-color", newColor);
    })
});
/* Demo 1 */

$("#carousel1_next").on("click", function(){
    $(this).parent().children("#carousel1_prev").removeClass("disabled");
    let firstImg = $(this).parent().parent().children("img").eq(0);
    let totalImgNumber = $(this).parent().parent().children("img").length;
    let = currentMargin = parseInt(firstImg.css("margin-left"));
    console.log(currentMargin);
    let containerWidth = $(this).parent().parent().width();
    if(currentMargin > -(totalImgNumber - 1) * containerWidth){
        let newMargin = currentMargin - containerWidth;
        let newMarginPercentage = newMargin / containerWidth * 100;
        firstImg.css({"margin-left": newMarginPercentage + "%"});
        console.log(newMarginPercentage);
        if(newMargin == -(totalImgNumber - 1) * containerWidth){
            console.log("disable next");
            $(this).addClass("disabled");
        }
    }
});

$("#carousel1_prev").on("click", function(){
    $(this).parent().children("#carousel1_next").removeClass("disabled");
    let firstImg = $(this).parent().parent().children("img").eq(0);
    let totalImgNumber = $(this).parent().parent().children("img").eq(0);
    let currentMargin = parseInt(firstImg.css("margin-left"));
    console.log(currentMargin);
    let ContainerWidth = $(this).parent().parent().width();
    if(currentMargin < 0){
        let newMargin = currentMargin + ContainerWidth;
        let newMarginPercentage = newMargin / ContainerWidth * 100;
        firstImg.css({"margin-left": newMarginPercentage + "%"});
        console.log(newMarginPercentage);
        if(newMargin == 0){
            console.log("disable prev");
            $(this).addClass("disabled");
        }
    }
})
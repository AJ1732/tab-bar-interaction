$(".tab").click(function() {
    $(this).addClass("active").siblings().removeClass("active")

    var indicator = $(".tab-indicator");
    var tapPosition = $(this).position();
    
    indicator.css({
        left: tapPosition.left  + "px", 
        //find a way to align it to the tabs as it expands
    });
    // console.log(left);
});


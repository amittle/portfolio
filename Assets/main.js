function scrollCarousel(){
    $("#myCarousel").carousel("next");
}

// $(window).scroll(function() {
//     if($(window).scrollTop() + $(window).height() == $(document).height()) {
//         scrollCarousel();
//         window.scrollTo(0, $(document).height()-$(window).height()-75);
//     }
//  });

setInterval(scrollCarousel, 5000)
function scrollCarousel(){
    $("#myCarousel").carousel("next");
    
}



// active_p = $(".carousel-item.active").find("p");

// active_p.scroll(function() {
//     console.log("scroll p")


//     if(active_p.scrollTop() === active_p.prop("scrollHeight") - active_p.height()) {
//         console.log("p bottom")
//         scrollCarousel();
//         $('#myCarousel').on('slid.bs.carousel', function () {
//             active_p = $(".carousel-item.active").find("p")
//             console.log(active_p.parent().parent().find("img").attr("src") + " in if")
//         })
//         console.log(active_p.parent().parent().find("img").attr("src"))
//     }
//  });

setInterval(scrollCarousel, 5000)
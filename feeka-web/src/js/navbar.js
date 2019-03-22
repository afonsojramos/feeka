$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("active");
        } else {
            $(".navbar").removeClass("active");
        }
    });
});
window.onscroll = function () {
    var element = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        element.classList.add("active");
    } else {
        element.classList.remove("active");
    }
};
document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".slider-mini-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".slider-mini .swiper-button-next",
            prevEl: ".slider-mini .swiper-button-prev",
        },
    });

});
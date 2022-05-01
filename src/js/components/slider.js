document.addEventListener('DOMContentLoaded', function () {

    const sliderMiniSwiper = new Swiper(".slider-mini-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".slider-mini .swiper-button-next",
            prevEl: ".slider-mini .swiper-button-prev",
        },
    });

    const gallerySwiper = new Swiper(".gallery-swiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 7,
        grabCursor: true,
        breakpoints: {
            900: {
                slidesPerView: 7,
            },
            600: {
                slidesPerView: 5,
            },
            300: {
                slidesPerView: 4,
                spaceBetween: 6,
            },
        },
    });
    const gallerySwiper2 = new Swiper(".gallery-swiper2", {
        loop: true,
        navigation: {
            nextEl: ".modal-gallery .swiper-button-next",
            prevEl: ".modal-gallery .swiper-button-prev",
        },
        thumbs: {
            swiper: gallerySwiper,
        },
    });


});
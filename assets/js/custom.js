 var swiper = new Swiper(".sweep", {
    // loop:true,
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
     },
      breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        },
 });

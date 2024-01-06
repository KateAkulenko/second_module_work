function swiperBanner() {
  new Swiper('.jsBannerSwiper', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export default swiperBanner;

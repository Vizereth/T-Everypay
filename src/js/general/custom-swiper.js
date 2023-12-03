import Swiper, { Navigation, Pagination } from 'swiper';

const createCaseCardSwiper = () => {
  const swiperEl = document.querySelector(".cases__swiper");
  const swiperPagEl = swiperEl.querySelector(".swiper-pagination");

  const swiper = new Swiper(swiperEl, {
    modules: [Navigation, Pagination],
    slideActiveClass: "case-card--active",
    slidesPerView: "auto",
    centeredSlides: false,
    slidesOffsetBefore: 10,
    grabCursor: true,
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      480: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      }
    },
    pagination: {
      bulletElement: "div",
      bulletClass: "cases__swiper-pag-bullet",
      bulletActiveClass: "cases__swiper-pag-bullet--active",
      el: swiperPagEl,
      hideOnClick: false,
      clickable: true,
    }
  });
};

const createFeatureCardSwiper = () => {
  const swiperEl = document.querySelector(".features__swiper");
  
  const swiper = new Swiper(swiperEl, {
    modules: [Navigation, Pagination],
    centeredSlides: true,
    spaceBetween: 1000,
    speed: 150,
    grabCursor: true,
    resizeObserver: true,
    breakpoints: {
      1300: {
        enabled: false
      },
      320: {
        enabled: true
      }
    },
  });
}



export { createCaseCardSwiper, createFeatureCardSwiper};

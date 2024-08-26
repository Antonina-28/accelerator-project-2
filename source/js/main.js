// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { clickMenu } from './burger-menu';
import { validateForm } from './form-validation';
import { flippingThroughTheSliderHero } from './hero-swiper';
import { flippingThroughTheSliderTours } from './tours-swiper';
import { flippingThroughTheSliderTraining } from './training-swiper';
import { flippingThroughTheSliderReviews } from './reviews-swiper';
import { flippingThroughTheSliderAdvantages } from './advantages-swiper';

clickMenu();
flippingThroughTheSliderHero();
flippingThroughTheSliderTours();
flippingThroughTheSliderTraining();
flippingThroughTheSliderReviews();
flippingThroughTheSliderAdvantages();
validateForm();


// document.addEventListener('DOMContentLoaded', () => {
//   flippingThroughTheSliderHero();
// //   playVideo();
// //   flippingPriceTabs();
// //   flippingThroughTheSlider();
// //   initTabs();
// //   vaildateForm();
// });

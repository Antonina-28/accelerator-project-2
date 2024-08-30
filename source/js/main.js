import { clickMenu } from './burger-menu';
import { validateForm } from './form-validation';
import { flippingThroughTheSliderHero } from './hero-swiper';
import { flippingThroughTheSliderTours } from './tours-swiper';
import { flippingThroughTheSliderTraining } from './training-swiper';
import { flippingThroughTheSliderReviews } from './reviews-swiper';
import { flippingThroughTheSliderAdvantages } from './advantages-swiper';
import { flippingThroughTheSliderGallery } from './gallery-swiper';

document.addEventListener('DOMContentLoaded', () => {
  clickMenu();
  flippingThroughTheSliderHero();
  flippingThroughTheSliderTours();
  flippingThroughTheSliderTraining();
  flippingThroughTheSliderReviews();
  flippingThroughTheSliderAdvantages();
  flippingThroughTheSliderGallery();
  validateForm();
});

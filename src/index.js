
import header from './scripts/header.js';
import gallery from './scripts/gallery.js';
import swiperBanner from './scripts/banner-slider.js';
import latestNews from './scripts/latest-news-slider.js';
import formRegistration from './scripts/form-registration.js';
import footer from "./scripts/footer.js";
import burger from './scripts/burger-menu.js';

document.addEventListener("DOMContentLoaded", () => {
  header ();
  swiperBanner ();
  latestNews ();
  gallery();
  formRegistration ();
  footer ();
  burger ();
});

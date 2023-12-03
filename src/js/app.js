import initMobileMenu from "../components/ui/mobile-menu/_mobile-menu.js";
import initComingSoonExpand from "./general/coming-soon.js";
import initConnectForm from "../components/ui/connect-form/_connect-form.js";
import initSubscribeForms from "./general/subscribe-forms.js";

import { createCaseCardSwiper, createFeatureCardSwiper } from "./general/custom-swiper.js";

import "../scss/style.scss";

const initAll = () => {
  initMobileMenu();

  initSubscribeForms();

  initComingSoonExpand();

  initConnectForm();

  createCaseCardSwiper();
  createFeatureCardSwiper();
};

window.addEventListener("DOMContentLoaded", initAll);

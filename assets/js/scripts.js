import { popup } from './modules/popup.js';
import { initScrollManager } from './modules/scrollManager.js';
import { initDecimalInputs, initForms, initPhoneInputs, initSelectFields } from './modules/forms.js';
import { initNavigationMenu, initDropzones, hidePreloader, initPrizeSelectPreview } from './modules/helpers.js';
import { initSliders } from './modules/sliders.js';
import { initTabsSliderNavigation } from './modules/goToSlide.js';
import { initTabs } from './modules/tabs.js';
import { initAccordeons } from './modules/accordeon.js';

popup.init();
window.popup = popup;

document.addEventListener('DOMContentLoaded', () => {
  hidePreloader();
  initSliders();
  initTabsSliderNavigation('prizes-tabs');
  initForms();
  initNavigationMenu();
  initTabs();
  initAccordeons();
  initPhoneInputs('+7 000 000 00 00');
  initSelectFields();
  initPrizeSelectPreview();
  initDecimalInputs();
  initDropzones();
  initScrollManager();
});

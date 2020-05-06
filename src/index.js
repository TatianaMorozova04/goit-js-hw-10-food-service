import './styles.css';
import munuItems from './menu.json';
import itemsFoodServise from './templates/food-servise-items.hbs';
import './js/theme.js';

const markup = itemsFoodServise(munuItems);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend' ,markup);
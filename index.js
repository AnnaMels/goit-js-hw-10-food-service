import menuTemplate from './templates/menu.hbs';
import menuElement from './menu.json';

console.log(menuTemplate);

const refs = {
    themesToggle: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body')
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

refs.themesToggle.addEventListener('change', setClass);
refs.themesToggle.addEventListener('change', saveThemeInLocalStorage);


function setClass() {
    const check = refs.themesToggle.checked;
    if(check) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
};


function saveThemeInLocalStorage() {
    const check = refs.themesToggle.checked;

    if(check) {
        localStorage.setItem('theme', Theme.DARK);
    }
    else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT)
    }
};

    const themeInLocalStorage = localStorage.getItem('theme');
    if(themeInLocalStorage === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.themesToggle.checked = true;
    }

    let menu = document.querySelector('.js-menu');

    function createMenu (arr) {
        const menuElements = arr.map(it => menuTemplate(it)).join('');
        menu.insertAdjacentHTML('beforeend', menuElements);
    };

    createMenu(menuElement);
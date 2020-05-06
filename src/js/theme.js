const switchRef = document.querySelector('#theme-switch-control');
const body = document.body;
const storageValue = localStorage.getItem('Theme');

switchRef.addEventListener('change', themeSwitch);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme(isDark) {
body.classList.toggle(Theme.DARK, isDark);
body.classList.toggle(Theme.LIGHT, !isDark);
localStorage.setItem('Theme', isDark?'DARK':'LIGHT');
}

function themeSwitch() {
  const checked = switchRef.checked;
  changeTheme(checked);
}

const isLastValueDark = storageValue === 'DARK';
changeTheme(isLastValueDark)
switchRef.checked = storageValue === 'DARK';
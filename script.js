let text = document.getElementById('title');
const box = document.querySelector('.box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.button-login');
const iconClose = document.querySelector('.close-button');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1.1 + 'px';
});

registerLink.addEventListener('click', () => {
  box.classList.add('active');
});

loginLink.addEventListener('click', () => {
  box.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  box.classList.add('active-popup');
  btnPopup.classList.add('pop');
});

iconClose.addEventListener('click', () => {
  box.classList.remove('active-popup', 'active');
});

btnPopup.addEventListener('second-click', () => {
  box.classList.remove('active-popup');
  btnPopup.classList.remove('pop');
});

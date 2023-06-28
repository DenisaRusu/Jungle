//import getUserCookies from '../getCookies.js';
//import dataBase from './dataBase.js';

const logOutBtn = document.getElementById('logOut-btn');
if (logOutBtn.style.display !== 'none') {
  logOutBtn.addEventListener('click', () => {
    // //logout by del cookies
    document.cookie = `sesionToken=x; expires=;SameSite=None; Secure`;
    document.cookie = `userName=none; expires=;SameSite=None; Secure`;
    location.reload();

    //also remove from DB? token ->
  });
}

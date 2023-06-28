import dataBase from './dataBase.js';
import getUserCookies from '../getCookies.js';

const delAccUser = document.getElementById('del-acc-user');

if (delAccUser.style.display !== 'none') {
  delAccUser[1].addEventListener('click', () => {
    const users = dataBase();
    const cookieUserName = getUserCookies().substring(59);
    const cookieToken = getUserCookies().substring(12, 48);
    console.log(users);
    if (
      cookieToken &&
      cookieUserName &&
      (cookieUserName !== '' || cookieToken !== '')
    ) {
      const getUser = users.filter((user) => user.userName === cookieUserName);
      if (getUser[0].token === cookieToken) {
        console.log(getUser[0]);
        users[getUser[0].id] = '';
        localStorage.setItem('users', JSON.stringify(users));

        document.cookie = `sesionToken=x; expires=;SameSite=None; Secure`;
        document.cookie = `userName=none; expires=;SameSite=None; Secure`;
        location.reload();
      } else {
        alert('error');
      }
    }
  });
}

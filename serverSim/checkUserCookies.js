import getUserCookies from '../getCookies.js';
import dataBase from './dataBase.js';

function checkUserCookies() {
  let isUserCookiesOK = false;
  const usersDataBase = dataBase();
  const cookieUserName = getUserCookies().substring(59);

  const cookieToken = getUserCookies().substring(12, 48);

  if (
    cookieToken &&
    cookieUserName &&
    (cookieUserName !== '' || cookieToken !== '')
  ) {
    const getUser = usersDataBase.filter(
      (user) => user.userName === cookieUserName
    );
    if (getUser[0].token === cookieToken) {
      //alert('user already loggedin');
      isUserCookiesOK = true;
    } else {
      isUserCookiesOK = false;
    }
  }
  return isUserCookiesOK;
}

export default checkUserCookies;

import checkUserCookies from './serverSim/checkUserCookies.js';
import isUserLoggedIn from './serverSim/logIn.js';
//import dataBase from './serverSim/dataBase.js';
import getUserCookies from './getCookies.js';

console.log(isUserLoggedIn);

if (checkUserCookies() || isUserLoggedIn) {
  console.log('user logged in');
  const loggedInMessage = document.getElementById('loggedIn-msg');
  const logInBtn = document.getElementById('logIn-btn');
  const logOutBtn = document.getElementById('logOut-btn');
  const cookieUserName = getUserCookies().substring(59);

  logInBtn.style.display = 'none';
  logOutBtn.style.display = 'inline';
  loggedInMessage.innerHTML = `Hi, ${cookieUserName}!`;
  loggedInMessage.style.display = 'inline';
} else {
  alert('user needs auth');
}

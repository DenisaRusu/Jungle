import checkUserCookies from './serverSim/checkUserCookies.js';

//console.log(checkUserCookies());

if (checkUserCookies()) {
  alert('user already logged');
} else {
  alert('user needs auth');
}

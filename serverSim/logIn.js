import dataBase from './dataBase.js';

let isUserLoggedIn = false;
const usersDataBase = dataBase();
const loginInput = document.getElementById('login-form');
const loginBtn = loginInput[3];

loginInput.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(usersDataBase[0].email);
  const emailInput = loginInput[0].value;
  const passwordInput = loginInput[1].value;

  if (checkUserInDB(emailInput, passwordInput)) {
    alert('login sucesfuly');
    isUserLoggedIn = true;
    location.reload();
  }

  //console.log(emailInput, passwordInput);
});

//1. login -> get data from db match? login or not

function checkUserInDB(emailInput, passwordInput) {
  let userData;
  if (usersDataBase.find((item) => item.email === emailInput)) {
    console.log('email found on DB');
    userData = usersDataBase.filter((item) => item.email === emailInput);
    if (passwordInput === userData[0].password) {
      console.log('email + pass match DB');
      setCookie(userData[0].userName, emailInput);
      return true;
    } else {
      console.log('pass do not match email');
      alert('pass do not match email');
    }
  } else {
    console.log('email not registred');
    alert('email not registred');
  }
}

//2. authorization token?

function setCookie(username, emailInput) {
  const sesionToken = uuidv4();

  //expiration 12 h -> ime measured in milisec test for 1h
  let date = new Date();
  date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
  const expire = date.toGMTString();

  const userData = usersDataBase.filter((item) => item.email === emailInput);
  console.log(userData[0]);

  const users = usersDataBase;
  users[userData[0].id] = {
    userName: userData[0].userName,
    id: userData[0].id,
    email: userData[0].email,
    password: userData[0].password,
    token: sesionToken,
  };
  localStorage.setItem('users', JSON.stringify(users));

  document.cookie = `sesionToken=${sesionToken}; expires=${expire};SameSite=None; Secure`;
  document.cookie = `userName=${username}; expires=${expire};SameSite=None; Secure`;
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default isUserLoggedIn;

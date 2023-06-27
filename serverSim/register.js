import dataBase from './dataBase.js';

const usersDataBase = dataBase();
const registerInput = document.getElementById('register-form');

// console.log(document.getElementById('register-form'));
// console.log(usersDataBase);

registerInput.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(usersDataBase[0].email);
  const userNameInput = registerInput[0].value;
  const emailInput = registerInput[1].value;
  const passwordInput = registerInput[2].value;
  const termsCondAgreement = registerInput[3];
  console.log(termsCondAgreement.checked);

  if (
    !checkAllUserInput(
      termsCondAgreement,
      userNameInput,
      emailInput,
      passwordInput
    )
  ) {
    alert('registration input doesnt match req patterns');
  } else {
    if (checkEmailInDB(emailInput, userNameInput)) {
      console.log('ready to register');
      registerNewUser(userNameInput, emailInput, passwordInput);
      alert('Registration Successful - please login');
      location.reload();
    }
  }
});

//3 register new user - save data to database

function registerNewUser(userName, email, password) {
  //console.log(usersDataBase.length);
  const users = usersDataBase;
  users[usersDataBase.length] = {
    userName: userName,
    id: usersDataBase.length,
    email: email,
    password: password,
  };
  localStorage.setItem('users', JSON.stringify(users));
}

//2. register -> get data from db match?
//check email exist in DB
//check id exists in
// login or not

function checkEmailInDB(emailInput, userNameInput) {
  if (usersDataBase.find((item) => item.email === emailInput)) {
    console.log('email found in DB');
    alert('eamail already registred, please use another valid email address');
  } else if (usersDataBase.find((item) => item.userName === userNameInput)) {
    console.log('userNameFound In db');
    console.log(userNameInput);
    alert('User Name already in use, pease choose another one');
  } else {
    console.log('email/username not found in db/all ok to register');
    return true;
  }
}

//1. validation form functions

function checkAllUserInput(
  termsCondAgreement,
  userNameInput,
  emailInput,
  passwordInput
) {
  if (termsCondAgreement.checked) {
    console.log('terms OK');
    if (checkUserName(userNameInput)) {
      console.log('username ok');
      if (checkMail(emailInput)) {
        console.log('email ok');
        if (checkPassword(passwordInput)) {
          console.log('all ok');
          return true;
        } else {
          console.log('pass not ok');
          alert('pass not ok');
        }
      } else {
        console.log('email not ok');
        alert('email not ok');
      }
    } else {
      console.log('username not ok');
      alert('usrName not ok');
    }
  } else {
    console.log('terms not ok ');
    alert('terms not ok');
  }
}

function checkUserName(userName) {
  const regEx = /^[a-zA-Z0-9]{2,16}$/;
  if (regEx.test(userName)) {
    return true;
  } else {
    return false;
  }
}

function checkMail(mail) {
  const regEx = /^\w+([\.-]?\w)*@\w+(\.\w{2,3})+$/;
  if (regEx.test(mail)) {
    return true;
  } else {
    return false;
  }
}

function checkPassword(passInputVal) {
  const passResult = document.getElementById('result-pass-validation-JS');
  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  if (regEx.test(passInputVal)) {
    return true;
  } else {
    return false;
  }
}

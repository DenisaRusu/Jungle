// const inputEmail = document.getElementById('fname');
// console.log(inputEmail.value);
// localStorage.setItem('email', inputEmail.value);
// console.log('mere?');
// let storedValue = localStorage.getItem('email');
// console.log(storedValue);
// localStorage.removeItem('email');

//const savedData = localStorage.getItem('donorFirstName');
//console.log(savedData);

// const newUserId = Math.floor(Math.random() * 500000) + 1;
const donateForm = document.getElementById('donate-form');
donateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getDonorsData();
  saveDonorData(getDonorsData());
});

function saveDonorData(donors) {
  const donorData = document.getElementsByClassName('save-data');
  console.log(donorData);
  donors[donors.length] = {
    id: donors.length,
    firstName: donorData[0].value,
    lastName: donorData[1].value,
    email: donorData[2].value,
    city: donorData[3].value,
    birthDay: donorData[4].value,
    creditCardNumber: '*',
  };
  localStorage.setItem('donors', JSON.stringify(donors));
  console.log(donors);
}

function getDonorsData() {
  const donors = JSON.parse(localStorage.getItem('donors'));
  console.log('donors-save data file', donors);
  return donors;
}

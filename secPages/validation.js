//form validation

//donation

// const donationFName = document.getElementById('fname');
// const donationLName = document.getElementById('lname');
// const submitDonationBtn = document.getElementById('donation-value');

//validation false -> prevent default >msg
// else submit
// let test = false;
// submitDonationBtn.addEventListener('click', (e) => {
//   console.log(donationFName.value);
//   if (
//     validationName(donationFName.value) &&
//     validationName(donationLName.value)
//   ) {
//     console.log(true);
//   } else {
//     e.preventDefault();
//   }
// });
//validationName(donationFName);

// function validationName(name) {
//   const regEx = /[A-Za-z]{2,10}/;
//   const test = regEx.test(name) ? true : false;
//   return test;
// }

// const inputEmail = document.getElementById('fname');
// console.log(inputEmail.value);
// localStorage.setItem('email', inputEmail.value);
// console.log('mere?');
// let storedValue = localStorage.getItem('email');
// console.log(storedValue);
// localStorage.removeItem('email');
// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));
// You can also use direct access to set/get item:

// localStorage.names = JSON.stringify(names);
// var storedNames = JSON.parse(localStorage.names);

// const donors = [];
// donors[0] = {
//   id: donors.length,
//   firstName: 'test',
//   lastName: 'test',
// };
// localStorage.setItem('donors', JSON.stringify(donors));

const savedDonors = JSON.parse(localStorage.getItem('donors'));
//localStorage.removeItem('donors');
console.log('savedDonors-valid file', savedDonors);

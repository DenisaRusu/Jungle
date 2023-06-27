const moneyBtn = document.querySelectorAll('[money-btn]');
const donationValue = document.getElementById('donation-value');
const growers = document.querySelectorAll('.texarea-resize');
const monthlyDonBtn = document.getElementById('donation-monthly');
const oneTimeDonBtn = document.getElementById('donation-one-time');

//get donation button value
moneyBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const donationValue = document.getElementById('donation-value');

    //open input for value input
    if (item.id === 'other') {
      item.value = '';
      item.setAttribute('type', 'text');
      item.setAttribute('placeholder', '€');
      item.addEventListener('change', () => {
        item.setAttribute('value', `${item.value}`);

        donationValue.setAttribute(
          'value',
          `Donate  €${item.value.substring(0)} Monthly`
        );
      });
    } else {
      donationValue.setAttribute(
        'value',
        `Donate  €${item.value.substring(2)} Monthly`
      );
      console.log(item.value.substring(0));
    }
  });
});

growers.forEach((grower) => {
  const textarea = grower.querySelector('textarea');
  textarea.addEventListener('input', () => {
    grower.dataset.replicatedValue = textarea.value;
  });
});
//toggle monthly donation
monthlyDonBtn.addEventListener('click', () => {
  if (donationValue.value.includes('One Time')) {
    donationValue.value = donationValue.value.replace('One Time', 'Monthly');
  }
});
oneTimeDonBtn.addEventListener('click', () => {
  if (donationValue.value.includes('Monthly')) {
    donationValue.value = donationValue.value.replace('Monthly', 'One Time');
  }
});

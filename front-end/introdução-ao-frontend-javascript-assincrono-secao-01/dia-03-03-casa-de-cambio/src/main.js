const buttonFind = document.querySelector('button');
const takeInputValue = document.querySelector('#coin');
const tittle = document.querySelector('#template-text');

const fetchAPI = (coin) => {
  const saveEndPointUrl = `https://api.exchangerate.host/latest?base=${coin}`;
  return fetch(saveEndPointUrl)
    .then((response) => response.json())
    .then((dados) => dados);
};

const renderCoins = (coins) => {
  const tableCoins = document.querySelector('#table-coins');
  tableCoins.innerHTML = '';
  tittle.innerHTML = `Valor referente a ${takeInputValue.value}`;
  coins.forEach(([coin, valueCoin]) => {
    const li = document.createElement('li');
    li.innerHTML = `${coin} = <span>${valueCoin}</span>`;
    takeInputValue.value = '';
    tableCoins.appendChild(li);
  });
};

const takinginputValue = () => {
  if (takeInputValue.value) {
    fetchAPI(takeInputValue.value).then(({ rates }) => {
      const coins = Object.entries(rates);
      renderCoins(coins);
    });
  } else {
    alert('dig din');
  }
};

buttonFind.addEventListener('click', () => {
  takinginputValue();
});

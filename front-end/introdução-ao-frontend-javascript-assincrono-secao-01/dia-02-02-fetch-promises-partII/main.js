import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');
const powers = document.querySelector('#power');

// Aqui, você insere o token de acesso obtido no site da API
const ACCESS_TOKEN = '2077118212494506';

// Essa é a URL base da API. Note que, ao final, ela insere o
// token de acesso. Dessa forma, não precisaremos alterar a URL
// caso o token mude
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.
const MAX_HEROES = 1000;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
// event.preventDefault() para evitar que ele recarregue
// a página
  event.preventDefault();

  const id = randomId();

  // Faremos o fetch utilizando nossa URL e o id gerado
  // pela função
  fetch(`${BASE_URL}/${id}`)
    // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
    // Uma vez extraído, vamos recuperar as informações
    // que precisamos. No caso, a imagem e o nome
      console.log(data);
      img.src = data.image.url;
      name.innerHTML = data.name;
      const obj = {
        combat: JSON.stringify(data.powerstats.combat),
        durability: JSON.stringify(data.powerstats.durability),
        intelligence: JSON.stringify(data.powerstats.intelligence),
        power: JSON.stringify(data.powerstats.power),
        speed: JSON.stringify(data.powerstats.speed),
        strength: JSON.stringify(data.powerstats.strength),
      };
      const objArr = Object.entries(obj);
      powers.innerHTML = '';
      objArr.forEach(([element1, element2]) => {
        const colocandoLis = document.createElement('li');
        colocandoLis.innerHTML = `${element1} = ${element2}`;
        powers.appendChild(colocandoLis);
      });
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});

import '../css/styles.css';
import ApiRequest from './ApiRequest.js'


const button = document.querySelector('#button');

button.addEventListener('click', function () {
  let ul = document.querySelector('#cocktail-ingridiants');
  ul.innerText = '';
  ApiRequest.send()
    .then(response => {
      console.log(response);

      const img = document.querySelector('img');
      let arrayIng = [];
      let arrayMeasure = [];

      let displayDiv = document.querySelector('#display-results');
      displayDiv.classList.remove('hidden');

      document.querySelector('#cocktail-name').innerHTML = `${response.drinks[0].strDrink}`;

      img.src = `${response.drinks[0].strDrinkThumb}`;

      ul.innerHTML = '';

      for (let i = 0; i <= 15; i++) {

        if ((response.drinks[0][`strIngredient${i + 1}`] === null || response.drinks[0][`strIngredient${i + 1}`] === ' ') && (response.drinks[0][`strMeasure${i + 1}`] === null || response.drinks[0][`strMeasure${i + 1}`] === ' ')) {
          return;

        } else if (response.drinks[0][`strMeasure${i + 1}`] === null || response.drinks[0][`strMeasure${i + 1}`] === ' ') {
          arrayMeasure[i] = ' ';

        } else if (response.drinks[0][`strIngredient${i + 1}`] === null || response.drinks[0][`strIngredient${i + 1}`] === ' ') {
          arrayIng[i] = ' ';

        } else {
          arrayIng.push(response.drinks[0][`strIngredient${i + 1}`]);
          arrayMeasure.push(response.drinks[0][`strMeasure${i + 1}`]);
          //create li
          let li = [];
          li[i] = document.createElement('li');
          //set the value of the li
          li[i].innerText = arrayMeasure[i] + ' ' + arrayIng[i];
          //append li to ul
          ul.appendChild(li[i])
        }
      }
    });
});
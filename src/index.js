import '../css/styles.css';
import ApiRequest from './ApiRequest.js'

ApiRequest.send()
  .then(response => {
    console.log(response);

    const button = document.querySelector('#button');
    const img = document.querySelector('img');
    let arrayIng = [];
    let arrayMeasure = []

    button.addEventListener('click', function () {
      document.querySelector('#cocktail-name').innerHTML = `${response.drinks[0].strDrink}`;

      img.src = `${response.drinks[0].strDrinkThumb}`;

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
          li[i].innerText = arrayMeasure[i] + ': of ' + arrayIng[i];
          //create an ul tag
          let ul = document.createElement('ul');
          //append li to ul
          ul.appendChild(li[i])
          //append ul to the DOM
          document.body.appendChild(ul)
        };

        //until here event listener
      };

      //until here ApiRequest
    });
  });

import '../css/styles.css';
import ApiRequest from './ApiRequest.js'

ApiRequest.send()
  .then(response => {
    console.log(response);

    const button = document.querySelector('#button');
    const img = document.querySelector('img');

    button.addEventListener('click', function () {
      document.querySelector('#cocktail-name').innerHTML = `${response.drinks[0].strDrink}`;

      img.src = `${response.drinks[0].strDrinkThumb}`;

      document.querySelector('#cocktail-ingridiants').innerHTML = `${response.drinks[0].strMeasure1}: of ${response.drinks[0].strIngredient1}`;

      let arrayIng = [];
      for (let i = 0; i <= 15; i++) {

        if (response.drinks[0][`strIngredient${i + 1}`] === null) {
          console.log('error line 22');
        } else {
          arrayIng.push(response.drinks[0][`strIngredient${i + 1}`])
          console.log(arrayIng[i]);
        }
        //Until here for loop
      }

      let arrayMeasure = [];
      console.log(arrayMeasure);
      for (let i = 0; i <= 15; i++) {

        if (response.drinks[0][`strMeasure${i + 1}`] === null) {
          return;
        } else {
          arrayMeasure.push(response.drinks[0][`strMeasure${i + 1}`])
          console.log(arrayMeasure[i]);
        }
        //Until here for loop
      }

      //until here event listener
    });

    //until here ApiRequest
  });

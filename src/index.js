import '../css/styles.css';
import ApiRequest from './ApiRequest.js'

const button = document.querySelector('#button');

button.addEventListener('click', function () {
  let ul = document.querySelector('#cocktail-ingridiants');
  ul.innerText = '';
  ApiRequest.send()
    .then(response => {
      //Show JASON file (response)
      console.log(response);

      //Get variabels
      const img = document.querySelector('img');
      const instructionsP = document.querySelector('#instructions');
      let displayDiv = document.querySelector('#display-results');
      const cocktailName = document.querySelector('#cocktail-name');
      let arrayIng = [];
      let arrayMeasure = [];
      let li = [];

      //Turn visible
      displayDiv.classList.remove('hidden');

      //Set varbs new content
      cocktailName.innerHTML = `${response.drinks[0].strDrink}`;
      img.src = `${response.drinks[0].strDrinkThumb}`;
      instructionsP.innerHTML = `${response.drinks[0].strInstructions}`;

      //Empty 'ul' container
      ul.innerHTML = '';

      //Run logic to chack validition
      for (let i = 0; i <= 15; i++) {
        if ((response.drinks[0][`strIngredient${i + 1}`] === null || response.drinks[0][`strIngredient${i + 1}`] === ' ') && (response.drinks[0][`strMeasure${i + 1}`] === null || response.drinks[0][`strMeasure${i + 1}`] === ' ')) {
          return;
        } else if (response.drinks[0][`strMeasure${i + 1}`] === null || response.drinks[0][`strMeasure${i + 1}`] === ' ') {
          arrayMeasure[i] = ' ';
        } else if (response.drinks[0][`strIngredient${i + 1}`] === null || response.drinks[0][`strIngredient${i + 1}`] === ' ') {
          arrayIng[i] = ' ';
        } else {
          //Push name of cocktail to an array
          arrayIng.push(response.drinks[0][`strIngredient${i + 1}`]);
          //Push measurements to an array
          arrayMeasure.push(response.drinks[0][`strMeasure${i + 1}`]);
          //create li
          li[i] = document.createElement('li');
          //set the value of the new li to measurement + name
          li[i].innerText = arrayMeasure[i] + ' ' + arrayIng[i];
          //append li to ul
          ul.appendChild(li[i])
        }
        //Until here loop
      }

      //Until here ApiResquest
    });
});
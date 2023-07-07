//import { filtername} from './data.js';

import data from './data/pokemon/pokemon.js';
import { sortNameDes, sortNameasc, sortNumYouger, sortNumLower } from './data.js';
const dataPokemon = data.pokemon;
const container = document.getElementById("targets");

//mostrar en el dom todos los pokemones
const display = (pokemones) => {
  container.innerHTML = ""
  pokemones.forEach(element => {
    const target = document.createElement('article')
    target.classList.add('cards');
    target.innerHTML += `<img src='${element.img}' alt='imagen de ${element.name}'>
        <h2>${element.name}</h2>
        <h4> Número: ${element.num}</h4>
        <h4>${element.generation.num}</h4>
        <h4> Tipo: ${element.type}</h4>
        <h4> Tamaño: ${element.size.height}</h4>
        <h4> Peso: ${element.size.weight}</h4>
        <p>${element.about}</p>`
    container.appendChild(target)
  });
}
display(dataPokemon);

//añadir un add event listener al menu
const menu = document.getElementById("menu");
//const targets = document.querySelector(".cards");

menu.addEventListener("change", () => {
  const element = menu.options[menu.selectedIndex].value
  if (element === "az") {
    display(sortNameasc(dataPokemon))
  }
  else if (element === "za") {
    display(sortNameDes(dataPokemon))
  }
  else if (element === "numberMayor") {
    display(sortNumYouger(dataPokemon))
  }
  else if (element === "numberMenor") {
    display(sortNumLower(dataPokemon))
  } 
})
//filtro de buscar por nombre
document.getElementById('pokeNames').addEventListener('keyup', () => {

  const filterName = document.getElementById('pokeNames').value;
  const result = dataPokemon.filter(element => (element.name).indexOf(filterName) !== -1);
  display(result)
})




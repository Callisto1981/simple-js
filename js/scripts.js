var pokemonRepository = (function () {
  var repository = [bulbasaur, charizard, blastoise];
  var bulbasaur = {
    name: 'Bulbasaur',
    height: 7,
    types:['Grass','Poison']
  };
  var charizard = {
    name: 'Charizard',
    height: 1.7,
    types:['Fire','Flying']
  };
  var blastoise = {
    name: 'Blastoise',
    height: 1.6,
    types:['Water']
  };
}

function add(pokemon) {
  if (
    typeof pokemon === 'object' &&
    'name' in pokemon &&
    'height' in pokemon &&
    'types' in pokemon
  ) {
    repository.push(pokemon);
  }
}
function getAll() {
  return repository;
}

function addListItem(pokemon = {}) {
  var pokemonList = document.querySelector('.pokemon_list');
  var $listItem = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('my_class');
  $listItem.appendChild(button);
  pokemonList.appendChild($listItem);
  button.addEventListener('click', function (event) {
    showDetails(pokemon);
  });
}
function showDetails(pokemon) {
  console.log(pokemon);
}
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu', height: 0.3, types: ['electric'] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (item) {
  pokemonRepository.addListItem(item);
});

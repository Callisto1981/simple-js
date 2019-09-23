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

var pokemonRepository = (function () {
  var repository = []
function loadList(){
  var pokemonList = fetch('https://pokeapi.co/api/v2/pokemon/');
  pokemonList.then(function(result){
  result.json().then(function(jsonResults){
    jsonResults.results.forEach(function(pokemon){
      add(pokemon);
    })
    console.log(jsonResults)
  })
  })
.catch(function(error){
  console.log(error)
})
}
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
    //respository.push(pokemon)
    respository[pokemon.name] = pokemon
    }
  };

  function getAll() {
    return repository;
  };
function loadDetails(pokemonObject){
  var pokemonDetails = fetch('https://pokeapi.co/api/v2/pokemon' + pokemonObject.name)
  pokemonDetails.then(function(result){
    result.json().then(function(jsonResults){
      respository[pokemonObject.name]
    })
  })
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
  };

  function showDetails(pokemon) {
    //console.log(pokemon);
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
  };
});
var pokeapi = pokemonRepository()
//console.log(pokeapi.getAll());
pokeapi.add({ name: 'Pikachu', height: 0.3, types: ['electric'] });
//console.log(pokeapi.getAll());
pokeapi.loadList()
pokeapi.getAll().forEach(function (item) {
  pokeapi.addListItem(item);
});

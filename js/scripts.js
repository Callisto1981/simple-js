
var apiUrl = ('https://pokeapi.co/api/v2/pokemon/')
var pokemonRepository = (function () {
  var repository = []

function loadList(item) {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });

    }).catch(function (e) {
      console.error(e);
    })
  }


  function add(pokemon) {
    repository.push(pokemon)
  }

  function getAll() {
    return repository;
  }

function loadDetails(pokemon) {
  var url = pokemon.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    pokemon.imageUrl = details.sprites.front_default;
    pokemon.height = details.height;
    pokemon.types = Object.keys(details.types);
    pokemon.weight = details.weight;
  }).catch(function (e) {
    console.error(e);
  });
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
    loadDetails(pokemon).then(function () {
    console.log(pokemon);
    });
  }

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
});




//pokeapi.add({ name: 'Pikachu', height: 0.3, types: ['electric'] });
//console.log(pokeapi.getAll());
const poke = pokemonRepository();
poke.loadList().then(function() {
poke.getAll().forEach(function (item) {
  poke.addListItem(item);
});
});


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
    /*repository[pokemon.name] = pokemon
  }*/
  }

  function getAll() {
    return repository;
  }

function loadDetails(pokemon) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_defaul;
    item.height = details.height;
    item.types = Object.keys(details.types);
    item.weight = details.weight;
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
  };

  function showDetails(pokemon) {
    loadDetails(item).then(function () {
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

//lines 2 through 16 are the "hard coded pokemon"?
/*var bulbasaur = {
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
};*/
var apiUrl = ('http://pokeapi.co/api/v2/pokemon/ditto/')
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

function loadDetails(item) {
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
    pokemonRepository.loadDetails(item).then(function () {
    console.log = (item);
    });
  }

  window.addEventListener('keydown', (e) => {
    var $modalContainer = document.querySelector('#modal-container');

    if (
      e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }
  });

  // Hides modal if clicked outside of it
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', e => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });


//instructions 3.2
var pokeList = {
  pokemon: pokemon.name,
  detailsUrl: pokemon.url
};

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
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (item) {
  pokemonRepository.addListItem(item);
});
});

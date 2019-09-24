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
/*function loadList(){
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
}*/

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
    /*if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {*/
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

/*function loadDetails(pokemonObject){
  var pokemonDetails = fetch('https://pokeapi.co/api/v2/pokemon' + pokemonObject.name)
  pokemonDetails.then(function(result){
    result.json().then(function(jsonResults){
      repository[pokemonObject.name]
    })
  })
}*/


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

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }
/*I did copy lines 113 to 146 because now I realize this is one of the
codes I've been missing*/
  function showModal(item) {
      var $modalContainer = document.querySelector('#modal-container');

      $modalContainer.innerHTML = '';

      var modal = document.createElement('div');
      modal.classList.add('modal');

      var closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      var nameElement = document.createElement('h1');
      nameElement.innerText = item.name;

      var imageElement = document.createElement('img');
      imageElement.classList.add('modal-img');
      imageElement.setAttribute('src', item.imageUrl);

      var heightElement = document.createElement('p');
      heightElement.innerText = 'height : ' + item.height;

      var typesElement = document.createElement('p');
      typesElement.innerText = 'weight : ' + item.weight;

      modal.appendChild(closeButtonElement);
      modal.appendChild(nameElement);
      modal.appendChild(imageElement);
      modal.appendChild(heightElement);
      modal.appendChild(typesElement);
      $modalContainer.appendChild(modal);
      $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visibile');
  }

/*I did copy lines 155 to 163 because now I realize this is one of then
codes I've been missing*/
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
    showModal: showModal,
    hideModal: hideModal
  };
});


var pokeapi = pokemonRepository()
//console.log(pokeapi.getAll());
pokeapi.add({ name: 'Pikachu', height: 0.3, types: ['electric'] });
//console.log(pokeapi.getAll());
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (item) {
  pokemonRepository.addListItem(item);
});
});

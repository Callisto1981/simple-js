function showModal() {
  var $modalContainer = document.querySelector('#modal-container');

  $modal = document.createElement('div');
  modal.classList.add('modal');

  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  var titleElement = document.createElement('h1');
  titleElement.innerText = title;

  var contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  $modalContainer.appendChild(modal);

  $modalContainer.classList.add('is-visible');
}

function hideModal() {
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.remove('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});

window.addEventListener('keydown', (e) => {
  var $modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible'))
  {
    hideModal();
  }
});

$modalContainer.addEventListener('click', (e) => {
  var target = e.target;
  if(target === $modalContainer) {
    hideModal();
  }
});













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

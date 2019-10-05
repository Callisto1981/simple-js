/*------------------- FUNCTION TO SHOW MODAL ------------------*/
function showModal(pokemon) {// pokemon
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.add('is-visible');

  $modalContainer.innerHTML = '';

  var modal = document.createElement('div');
  modal.classList.add('modal');

  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  var nameElement = document.createElement('h1');// Name in Modal
  nameElement.innerText = 'name: ', +  pokemon.name;

  var heightElement = document.createElement('p');//height in model
  heightElement.innerText = 'height: ', +  pokemon.height;

  var imageElement = document.createElement('img'); //image in modal
  imageElement.setAttribute = 'src', + pokemon.url;

  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(heightElement);
  modal.appendChild(imageElement);
  $modalContainer.appendChild(modal);

  $modalContainer.classList.add('is-visible');

  //console.log('modal', $modalContainer);
}

document.querySelector('#show-modal').addEventListener('click', (showModal) => {
  showModal(pokemon.nameElement);
});
/*----------------------------------------------------------*/
/*----------------- FUNCTION TO HIDE MODAL -----------------*/
//var dialogPormiseReject; //This can be set later

function hideModal(/*pokemon*/) {
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.remove('is-visible');

  /*if (dialogPromiseReject) {
    dialogPromiseReject();
    dialogPormiseReject = null;
  }*/
};


window.addEventListener('keydown', (e) => {
  var $modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible'))
  {
    hideModal();
  }
});

var $modalContainer = document.querySelector('.pokemon_list');
$modalContainer.addEventListener('click', (e) => {
  var target = e.target;
  if(target === $modalContainer) {
    hideModal();
  }
});
/*-------------------------------------------------------------*/

/*function showDialog(title, text) {
  showModal(title. text);

  var modal = $modalContainer.querySelector('.modal');

  var confirmButton = document.createElement('button');
  confirmButton.classList.add('modal-confirm');
  confirmButton.innerText = 'Confirm';

  var cancelButton = document.createElement('button');
  cancelButton.classList.add('modal-cancel');
  cancelButton.innerText = 'Cancel';

  modal.appendChild(confirmButton);
  modal.appendChild(cancelButton);

  confirmButton.focus();

  return new Promise((resolve, reject) => {
    cancelButton.addEventListener('click', hideModal)
    confirmButton.addEventListener('click', () => {
      dialogPormiseReject = null; // Reset this
      hideModal();
      reject();
    });

    dialogPromiseReject = reject;
  });
}

document.querySelector('#show-dialog').addEventListener('click', () => {
  showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
    alert('confirmed!');
  }, () => {
    alert('not confirmed');
  });
});*/



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
      pokemon.name = details.name;//add
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

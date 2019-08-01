
var bulbasaur = {
  name: 'Bulbasaur',
  height: 7,
  types:["Grass","Poison"]
};

var charizard = {
  name: 'Charizard',
  height: 1.7,
  types:["Fire","Flying"]
};

var blastoise = {
  name: 'Blastoise',
  height: 1.6,
  types:["Water"]
};

var pokemonRepository = (function () {
  var repository = [bulbasaur,charizard,blastoise];

  return {
    add: function(pokemon) {
      repository.push(pokemon);
    },
    getAll: function() {
      return repository;
    }
  };
})();


repository.forEach(function(poke){
  document.write("<h1>" + poke.name + "</h1>");
  document.write("<p>" + poke.height + "</p>");
  document.write("<p>" + poke.types + "</p>");
});

for (var i = 0; i <repository.length; i++) {
document.write(pokemonRepository.getAll);
};

pokemonRepository.add({ name: 'Pikachu' });
document.write(pokemonRepository.getAll());

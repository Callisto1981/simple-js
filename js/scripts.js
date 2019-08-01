
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

var allPokes = pokemonRepository.getAll() {
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


allPokes.forEach(function(poke){
  document.write("<h1>" + poke.name + "</h1>");
  document.write("<p>" + poke.height + "</p>");
  document.write("<p>" + poke.types + "</p>");
});

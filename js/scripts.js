
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

var repository = [bulbasaur,charizard,blastoise];
repository.forEach(function(currentName){
  document.write(currentName);
});

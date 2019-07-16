var repository = [bulbasaur,charizard,blastoise]

var bulbasaurHeight = 7;
var bulbasaurTypes = 'grass';
var bulbasaur = {
  name: 'Bulbasaur',
  height: 7,
  types: 'grass','poison'
};

var charizarHeight = 1.7;
var charizarTypes = 'fire','flying';
var charizard = {
  name: 'Charizard',
  height: 1.7,
  types: 'fire','flying'
};
var blastoiseHeight = 1.6;
var blastoiseTypes = 'water';
var blastoise = {
  name: 'Blastoise',
  height: 1.6,
  types: 'water'
};

 for (var i = 0; i < repository.length; i++) {
   document.write(repository[i].name);
 }

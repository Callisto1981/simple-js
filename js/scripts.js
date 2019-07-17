var repository = [bulbasaur, charizard, blastoise];

var bulbasaur = {
  name: 'Bulbasaur',
  height: 7,
  types: 'grass','poison'
};

var charizard = {
  name: 'Charizard',
  height: 1.7,
  types: 'fire','flying'
};

var blastoise = {
  name: 'Blastoise',
  height: 1.6,
  types: 'water'
};

for (var i = 0; i < repository.length; i++) {
  document.write(repository[i].name);
}

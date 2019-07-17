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

var repository = [bulbasaur, charizard, blastoise];

for (var i = 0; i < repository.length; i++) {
  document.write(repository[i].name);
}


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

for (var i = 0; i <repository.length; i++) {
  document.write('<p>Name: '+repository[i].name+'</p>');
  document.write('<p>Height: '+repository[i].height+'</p>');
  document.write('<p>Type: '+repository[i].types+'</p>')
}

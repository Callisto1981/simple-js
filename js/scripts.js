var bulbasaur = {
  name: 'Bulbasaur',
  height: 7,
  types:['grass','poison']
};

var charizard = {
  name: 'Charizard',
  height: 1.7,
  types:['fire','flying']
};

var blastoise = {
  name: 'Blastoise',
  height: 1.6,
  types:['water']
};

var repository = [bulbasaur,charizard,blastoise];

for (var i = 0; i <repository.length; i++) {
  document.write('<p>'+repository[0].name.+'</p>');
  document.write('<p>'+repository[0].height+'</p>')
  break
}

for (var i = 0; i <repository.length; i++) {
  document.write('<p>'+repository[1].name+'</p>');
  document.write('<p>'+repository[1].height+'</p>')
  break
}

for (var i = 0; i <repository.length; i++) {
  document.write('<p>'+repository[2].name+'</p>');
  document.write('<p>'+repository[2].height+'</p>')
  break
}

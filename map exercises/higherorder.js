var animals = [ 
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' }, 
    { name: 'Jimmy', species: 'fish' } 
   ]

var names = animals.map((x) => x.name + ' is a ' + x.species)

console.log(names)
const fetch = require('node-fetch');

const getCharacter = async(id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();
    const characterInfo = { 
        name: character.name, 
        status: character.status, 
        species: character.species
    };
    return characterInfo;
};

const getManyCharacters = ids => {
    return Promise.all(ids.map(id => getCharacter(id)));
};

module.exports = {
    getCharacter,
    getManyCharacters
};
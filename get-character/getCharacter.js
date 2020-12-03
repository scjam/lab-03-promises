const fetch = require('node-fetch');

async function getCharacter(id) {
    try {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(({ name, status }) => ({ name: name, status: status}))
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getCharacter
}
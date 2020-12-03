const { getCharacter } = require('./getCharacter.js');
const fetch = require('node-fetch');

describe('getCharacter function', () => {
    it('return name from Rick and Morty API', async () => {
         const rick = ({ name: "Rick Sanchez", status: "Alive"  })
         paramId = 1
         return getCharacter(paramId)
         .then(result => {expect(result).toEqual(rick)})
    })
})
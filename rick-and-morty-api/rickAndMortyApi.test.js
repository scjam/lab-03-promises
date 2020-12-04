const { default: fetch } = require('node-fetch');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');
const mockApiResponse = require('./mockApiResponse.json');

jest.mock('node-fetch');

describe('getCharacter function', () => {
    it('return info from Rick and Morty API based on ID', async () => {
        
        fetch.mockResolvedValue({
             json: () => Promise.resolve(mockApiResponse)
        });

        const result = await getCharacter(1);

        expect(result).toEqual({ name: "Rick Sanchez", status: "Alive", species: "Human" })
    })
})

describe('getManyCharacters function', () => {
    it('fetches many characters from the rick and morty api', async() => {
        
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockApiResponse)
        });

        const characters = await getManyCharacters([2, 4, 6, 8, 10])

        expect(characters).toEqual([
            { name: 'Morty Smith', status: 'Alive', species: 'Human'},
            { name: 'Beth Smith', status: 'Alive', species: 'Human'},
            { name: 'Abadango Cluster Princess', status: 'Alive', species: 'Alien'},
            { name: 'Adjudicator Rick', status: 'Dead', species: 'Human'},
            { name: 'Alan Rails', status: 'Dead', species: 'Human'}
        ])
    });
});
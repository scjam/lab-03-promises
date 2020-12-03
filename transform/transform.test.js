const { transform } = require('./transform.js');
const fs = require('fs').promises;

describe('transform fn', () => {
    it('to read a file, remove all capital letters, then make all letters capital, then reverse the string', async() => {

        const result = await transform('./transform/TEST.txt')
        expect(result).toEqual('!AH DRI OLLE')
    })
})
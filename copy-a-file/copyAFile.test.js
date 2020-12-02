const { copyAFile } = require('./copyAFile.js');
const fs = require('fs').promises;

describe('copyAFile fn', () => {
    it('copies a file using readFile and writeFile', async() => {

        return copyAFile(`${__dirname}/TEST.txt`, './TEST-COPY.txt')
        .then(() => {
            return fs.readFile('./TEST-COPY.txt', 'utf-8');
        })
        .then(
            testFile => {
                expect(testFile).toEqual('Hello Rird Cha!')
            }
        )
    })
})
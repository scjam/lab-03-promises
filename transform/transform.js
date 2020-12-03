const fs = require('fs').promises;

async function transform(src) {
    try {
        return await fs.readFile(src, 'utf-8')
        .then(data => data.split('').filter(filtered => {
            return filtered === filtered.toLowerCase();
        }))
        .then(data => data.map(mapped => {
            return mapped.toUpperCase();
        }))
        .then(data => data.reverse().join(''))
    } catch(err) {
        console.log(err)
    }
} 

module.exports = { transform };

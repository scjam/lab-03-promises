const fs = require('fs').promises

async function reader() {
    try {
        const data = await fs.readFile('../README.md', 'utf-8');
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}
reader();

async function writer() {
    try {
        await fs.writeFile('.sandbox.txt', 'Hello Rird Cha');
        console.log('done');
    } catch(err) {
        console.log(err)
    }
}
writer();

async function copier() {
    try {
        const data = await fs.readFile('.sandbox.txt', 'utf-8');
        await fs.writeFile('../README-COPY.md', data);
        console.log('done');
    } catch(err) {
        console.log(err)
    }
}
copier();
import fs from 'fs';

// fs.rename('abc.js','xyz.js',(err) => {
//     if (err) throw err;
//     console.log('name changes');
// })

// fs.mkdir('abc',(err) => {
//     if (err) throw error;
//     console.log('folder created');
// })

// fs.writeFile('abc/xyz.js','Hello New File',(err) => {
//     if (err) throw err;
//     console.log('file created');
// })

// fs.appendFile('abc/xyz.js','another content',(err) => {
//     if (err) throw err;
//     console.log('new line added');
// })

fs.readdir('./Pakistan',(err,files) => {
    if (err) throw err;
    for (let i = 0; i < 3 ; i++){
        console.log(files[i]);
    };
    })

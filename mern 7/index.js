import path from 'path';


const pathname = path.basename('https://nodejs.org/api/path.html');
console.log(pathname);

const pathext = path.extname(pathname);
console.log(pathext);
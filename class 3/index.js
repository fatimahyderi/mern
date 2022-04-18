console.log('hello');

for(let i = 1; i < 6 ; i++){
   setTimeout(() => {console.log(i)},1000 * i) ;
}
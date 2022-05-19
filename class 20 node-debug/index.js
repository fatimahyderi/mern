var bio = {
    fname : "ali",
    lname : "ahmed",
    age : 23
}

Object.keys(bio).forEach(key => {
    if(key == 'lname'){
    console.log(key,bio[key])
    }
})
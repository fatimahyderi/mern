class User{
    constructor(username,age,password){
        this.username = username;
        this.userage = age;
        this.password = password;
    }

    
    
}


class Admin extends User{

    get password_value(){
        return `${this.password}`
    }

    set password_value(arg){
        if(arg.length > 6){
            console.log('Max 6 characters allowed');
        }else {
            this.password = arg;
            console.log('password changed')
        }
    }

    
    

}


let admin1 = new Admin("ali",23,"admin12345");
console.log(admin1.password_value);
admin1.password_value = 'pass';
console.log(admin1.password_value)

//let user1 = new User("ali",23,"password");
//console.log(user1);
// let admin1 = new Admin("John",30,"pass","admin");
// console.log(user1.password_value)
//let admin1 = new Admin()
//console.log(admin1)
//admin1.password_value= 'passwordchanged';
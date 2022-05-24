var allUser = [];
class User{
    constructor(name,age,birthyear,address){
        this.name = name;
        this.age = age;
        this.birthyear = birthyear;
        this.address = address;
        
    }

    pushUser(element){
        allUser.push(element);
        return allUser;
      }
}

class Admin extends User{
    constructor(name,age,birthyear,address){
        super(name,age,birthyear,address);
        this.name = name;
        this.age = age;
        this.birthyear = birthyear;
        this.address = address;
    }

    deleteUser(userdetails){
        let username = userdetails.name;
        var del_user_details = `Admin ${this.name} delete user ${username}`;
        var allUser_1 = allUser.filter(data => data.name != username);
        // const searchObject= allUser.find((user) => user.name == username);
        // const valuseindex = allUser.findIndex(function(searchObject,allUser){
        //     return "hello"
        // });

        // console.log(`Model X5 is present in brand ${searchObject.address} ${valuseindex}`);
        return del_user_details;
        //return username;
    }
}

let user = new User();
//console.log(user);
let user1 = new User("Ali",23,2005,"Karachi");
let user2 = new User("Ahmed",25,2007,"Lahore");
let user3 = new User("Mohd",22,2001,"Karachi");
let user4 = new User("Kazim",22,2001,"Karachi");
let user5 = new User("Hussain",22,2001,"Karachi");
// let user6 = new User("Aliya",22,2001,"Karachi");
// let user7 = new User("JOhn",22,2001,"Karachi");
// let user8 = new User("Zain",22,2001,"Karachi");
//let user9 = new User("Ashar",22,2001,"Karachi");
//let user1 = user.pushUser("ali",23,1999,"Karachi");
// let user2 = user.pushUser("ahmed",20,2002,"Lahore");
// console.log(user1);
// console.log(user9);

user.pushUser(user1);
user.pushUser(user2);
user.pushUser(user3);
user.pushUser(user4);
user.pushUser(user5);
//user.pushUser(user6);
// user.pushUser(user7);
// user.pushUser(user8);
// user.pushUser(user9);

console.log(allUser);

let admin1 = new Admin("Doe",34,1987,"Lahore");
console.log(admin1);
console.log(admin1.deleteUser(user5));

// console.log(admin1.deleteUser(user3));
// console.log(admin1.deleteUser(user4));
// console.log(admin1.deleteUser(user5));
// console.log(admin1.deleteUser(user6));
// console.log(admin1.deleteUser(user7));
// console.log(admin1.deleteUser(user8));
//console.log(admin1.deleteUser(user9));



// console.log(user1);
// console.log(user2);
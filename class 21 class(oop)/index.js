class Human{
    constructor(name,age,address){
        this.name = name;
    }

    userDetails(){
        var details = `${this.name}`;
        return details;
    }
}

// class Prof extends Human{
//     constructor(name,profDetails){
//         super(name);
//         this.profDetails = profDetails;
//     }
    
//     adminDetails(){
//         var details = this.userDetails();
//         return `${details} and he is a ${this.profDetails}`;
//     }
    
// }

class Teacher extends Human{
    constructor(name,className,time){
        super(name);
        this.name = name;
        this.className = className;
        this.time = time;
    }

    teacherDetails(){
        var details = this.userDetails();
        return `${details} takes ${this.className} at ${this.time}`;
    }
}
let human = new Human("ali");
console.log(human.userDetails());

// let humanpro = new Prof("ali","student");
// console.log(humanpro.adminDetails());

let teacher = new Teacher("ali","Physics",)

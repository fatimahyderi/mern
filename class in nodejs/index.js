console.log("testing");

// Student class declaration
class Student {
    //id = 1;
    constructor(name,id) {
      //id = 45;
      this.id = id;
      this.name = name;
    }
   
    // set name(name) {
    //   this._name = name;
    // }
   
    // get name() {
    //   return this._name;
    // }
   
    sayHi(name) {
      console.log("Hi, " + this.name + ", your ID is " + this.id);
    }
   }
   
   name_stu = 'Ali';

   var newStudent = new Student(name_stu,56);
   //newStudent.name = "Ali";
   
   
   newStudent.sayHi();
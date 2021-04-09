/**
define classes: class declarations & class expressions
hoisted: class are not hoisted
 */

// class declarations: use the class keyword with the name of the class
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
// class expresstions:

// unnamed
const Retangle = class {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}
console.log(Retangle.name); // Retangcle

// name
const Animal = class Animal1 {
    constructor(size, height){
        this.size = size;
        this.height = height;
    }
}
console.log(Animal.name); // Animal1

// khởi tạo đối tượng sử dụng tên biến đã gán
const retangcle = new Retangle();
const animal = new Animal();

// Property and method

class Project1 {

    constructor (name, description) {
        // property
        this.name = name
        this.description = description
   }
    // method
    printInfo () {
        // Để gọi các property của class ta sẽ dùng this.tênProperty
        console.log(`project  name ${this.name} has description ${this.description}`)
         
    }
}
const project1 = new Project1('Big Project', 'This is a sample project')
project1.printInfo()

// Getter & Setter
class Project {
    constructor (name, description) {
        this.name = name
        this.description = description
   }
  get projectName() {
        return this.name
  }
  set projectName(name) {
        this.name = name
  }

  get projectDescription() {
        return this.description
  }
  set projectDescription(description) {
        this.description = description
  }
}
const project = new Project()
// set name
project.projectName = 'Another name of project'
project.projectDescription = 'This is a another long description for project'
// get Name
console.log(project.projectName)
console.log(project.projectDescription)

// static method
class Project2 {
    //.....
    static sayHello () {
        console.log('This is a console inside a static method')
    }
}
Project2.sayHello()

// extend
class SecretProject extends Project1 {
    constructor (name, description, password) {
        super(name, description)
        this.password = password
    }
    //override method class parent using super.method()
    printInfo () {
        super.printInfo()
        console.log('And the password of this project is: ', this.password)
    }

}
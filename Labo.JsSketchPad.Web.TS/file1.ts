//Our Animal Class
class Animal {
    //Animal Constructor
    constructor(public name: string) {
    }
}

class Dog extends Animal {
    //Dog Constructor
    //We are leveraging parameter property declaration
    //to automatically create name and age properties
    constructor(public name: string, public age: number) {
        //Note that we are passing name to the
        //base class constructor to initialize
        super(name);
    }
    sayHello() {
        var span = document.createElement("span");
        span.innerText = "Hello, I'm " + this.name + " with age " + this.age;
        document.body.appendChild(span);
    }
}
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Greeter = (function () {
    function Greeter(element) {
        this.i = 1;
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.i++;
        this.timerToken = setInterval(function () {
            return _this.span.innerText = new Date().toUTCString();
        }, 500);
    };

    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();

//Our Animal Class
var Animal = (function () {
    //Animal Constructor
    function Animal(name) {
        this.name = name;
    }
    return Animal;
})();

var Dog = (function (_super) {
    __extends(Dog, _super);
    //Dog Constructor
    //We are leveraging parameter property declaration
    //to automatically create name and age properties
    function Dog(name, age) {
        //Note that we are passing name to the
        //base class constructor to initialize
        _super.call(this, name);
        this.name = name;
        this.age = age;
    }
    Dog.prototype.sayHello = function () {
        var span = document.createElement("span");
        span.innerText = "Hello, I'm " + this.name + " with age " + this.age;
        document.body.appendChild(span);
    };
    return Dog;
})(Animal);

window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map

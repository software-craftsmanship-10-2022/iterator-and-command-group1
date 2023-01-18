"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, surname, age, children) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.children = children;
    }
    Person.prototype.completeName = function () {
        return "".concat(this.name, " ").concat(this.surname);
    };
    Person.prototype.toString = function () {
        return "name: ".concat(this.name, ". surname: ").concat(this.surname, ". age: ").concat(this.age, ". children: ").concat(this.children);
    };
    return Person;
}());
exports["default"] = Person;

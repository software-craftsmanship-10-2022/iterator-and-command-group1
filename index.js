"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var IteratorPersons = /** @class */ (function () {
    function IteratorPersons(list) {
        this.list = list;
        this.index = 0;
    }
    IteratorPersons.prototype.next = function () {
        return this.list[this.index++];
    };
    IteratorPersons.prototype.hasMore = function () {
        return this.index < this.list.length;
    };
    IteratorPersons.prototype.current = function () {
        return this.list[this.index];
    };
    IteratorPersons.prototype.reset = function () {
        this.index = 0;
    };
    return IteratorPersons;
}());
function orderBy(list, func) {
    var arrayList = [];
    while (list.hasMore()) {
        arrayList.push(list.current());
        list.next();
    }
    return arrayList.sort(func);
}
function orderByName(list) {
    var compareByName = function (itemA, itemB) {
        if (itemA.completeName() === itemB.completeName()) {
            return 0;
        }
        if (itemA.completeName() < itemB.completeName()) {
            return -1;
        }
        return 1;
    };
    return orderBy(list, compareByName);
}
function orderByAge(list) {
    var compareByAge = function (itemA, itemB) {
        if (itemA.age === itemB.age) {
            return 0;
        }
        if (itemA.age < itemB.age) {
            return -1;
        }
        return 1;
    };
    return orderBy(list, compareByAge);
}
function orderByChildren(list) {
    var compareByChildren = function (itemA, itemB) {
        if (itemA.children === itemB.children) {
            return 0;
        }
        if (itemA.children < itemB.children) {
            return -1;
        }
        return 1;
    };
    return orderBy(list, compareByChildren);
}
var person1 = new Person_1["default"]('person 1', 'surname 1', 11, 4);
var person2 = new Person_1["default"]('person 2', 'surname 2', 2, 1);
var person3 = new Person_1["default"]('person 3', 'surname 3', 32, 2);
var person4 = new Person_1["default"]('person 4', 'surname 4', 4, 0);
var person5 = new Person_1["default"]('person 4', 'surname 5', 34, 3);
var personIter = new IteratorPersons([person5, person3, person2, person4, person1]);
console.log(orderByChildren(personIter));
// while (iter.hasMore()) {
//     console.log('current', iter.current());
//     console.log('has more?', iter.next());
// }
// console.log('end. Has more?', iter.hasMore());

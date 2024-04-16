// //The Subject "class"
// var Subject = function () {
//     this.observerList = [];
// }
// // Add an observer
// Subject.prototype.registerObserver = function (observer) {
//     this.observerList.push(observer);
// }
// // Remove an observer
// Subject.prototype.unregisterObserver = function (observer) {
//     // find the Observer that wants to be removed
//     var index = this.observerList.indexOf(observer);
//     // Remove it from the array
//     this.observerList.splice(index, 1);
// }

class Subject {
    constructor() {
        this.observerList = [];
    }
    registerObserver() {
        this.observerList.push(observer);
    }
    unregisterObserver() {
        let index = this.observerList.indexOf(observer);
        this.observerList.splice(index, 1);
    }
    notifyObservers(){
        //...................................
        for (let i = 0, len = this.observerList.length; i < len; i += 1) {
            this.observerList[i].update();
        }
    }
}

// Notify all observers
// Subject.prototype.notifyObservers = function () {
//     for (let i = 0, len = this.observerList.length; i < len; i += 1) {
//         this.observerList[i].update();
//     }
// }


// The Observer "class"
var Observer = function () {
    // notification means calling a method of the observer object
    // each observer must! implement their own version of notify, here we set default:
    this.update = function () {
        throw "update() is not implemented";
    }
}
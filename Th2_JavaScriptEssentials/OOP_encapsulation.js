// // properties
// name: string,
// salary: number,

// // methods
// getSalary()
//   returns salary
// increaseSalary(incrValue, pass)
//    increments salary with incrValue, if pass == 'abracadabra'

"use strict";
let devFactory = function (name, salary) {
    // YOUR CODE HERE
    let obj = {};
    obj.name = name;
    obj.salary = salary;
    obj.getSalary =function(){
        return salary;
    };
    obj.increaseSalary = function(incrValue, pass){
        if (pass == 'abracadabra') {
            salary += incrValue;
        }
        return salary;
    }
    return obj;
}

let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

// *** OUTPUT ***
// Peter salary is 1000
// Maria salary is 1200

// Wrong password! Maria salary will not be increased!

// Peter salary after promotion is 1500
// Maria salary after promotion is 1200
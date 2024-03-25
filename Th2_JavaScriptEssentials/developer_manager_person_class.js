/* --------------------------- Person constructor --------------------------- */
function Person(name, age) {
    // your code here ...
    this.name = name;
    this.age = age;
}
// Person greet method
// your code here ...
Person.prototype.greet = function(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
}

/* --------------------------- Manager constructor -------------------------- */
function Manager(name, age, managed) {
    // reuse Person constructor
    // your code here ...
    Person.call(this, name, age);
    this.name = name;
    this.age = age;
    this.managed = managed;
}
// Manager objects should inherit all methods from Person:
Manager.prototype = Object.create(Person.prototype);
Manager.prototype.greet = function(){
    let managedDevs = '';
    for (const dev of this.managed) {
        managedDevs += dev.name + ', ';
    }
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    console.log(`I manage ${managedDevs}`);
}

/* -------------------------- Developer constructor ------------------------- */
function Developer(name, age, skillset) {
    // reuse Person constructor
    // your code here ...
    Person.call(this, name, age);
    this.name = name;
    this.age = age;
    this.skillset = skillset;
}
// Developer objects should inherit all methods from Person:
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.greet = function(){
    let skills = '';
    for (const skill of this.skillset) {
        skills += skill + ', ';
    }
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    console.log(`I know ${skills}`);
}

/* ----------------------------- Create Objects ----------------------------- */
// Developer instances
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

/* ----------------------------- Use the objects ---------------------------- */
maria.greet();
pesho.greet();
gates.greet();
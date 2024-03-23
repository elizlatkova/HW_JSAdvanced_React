var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);
let list = [];
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        list.push(key);
    }
}
console.log(list);
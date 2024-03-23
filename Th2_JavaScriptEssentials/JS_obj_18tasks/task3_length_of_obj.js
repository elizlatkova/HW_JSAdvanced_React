var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}; 

let lenObj = 0;
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        lenObj++;
    }
}
console.log(lenObj);
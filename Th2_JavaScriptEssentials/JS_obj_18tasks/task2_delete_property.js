var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let {rollno, ... student2} = student;
console.log(student2);
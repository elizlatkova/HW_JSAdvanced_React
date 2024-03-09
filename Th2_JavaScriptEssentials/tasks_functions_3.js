// ---------------------------------- Task 3 ---------------------------------- //
/* DESCRIPTION:
   Create a function named 'createStudent' that returns an object representing a student.
   The object should have properties for 'name', 'age', and 'grades',
   where 'grades' is an array of numbers.
   Additionally, the object should have a method named 'calculateAverageGrade'
   that calculates and returns the average grade of the student.
*/

// YOUR CODE HERE
function createStudent(name, age, grades) {
    let student = {};
    let sum = 0;
    student.calculateAverageGrade = function () {
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        };
        return sum/(grades.length);
    }
    return student;
}

// TEST
const student1 = createStudent("John", 20, [80, 85, 90]);
console.log(student1.calculateAverageGrade()); // Expected output: 85
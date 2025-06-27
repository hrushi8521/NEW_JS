var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    return Student;
}());
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
        School.totalStudents += 1;
    };
    School.totalStudents = 0;
    return School;
}());
var s1 = new Student("Tom", 10);
var s2 = new Student("Larry", 20);
var s3 = new Student("Mike", 30);
var sc = new School();
sc.addStudent(s1);
sc.addStudent(s2);
sc.addStudent(s3);
console.log("Total students are : " + School.totalStudents);
console.log("Students Details : ", sc.studentList);

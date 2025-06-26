var Student = /** @class */ (function () {
    function Student(name, studentId) {
        this.name = name;
        this.studentId = studentId;
    }
    return Student;
}());
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
        School.totalStudents++;
    };
    School.prototype.getTotalCount = function () {
        console.log(School.totalStudents);
    };
    School.totalStudents = 0;
    return School;
}());
var s = new Student("Tom", 1);
var s1 = new Student("Jerry", 2);
var s2 = new Student("Harry", 3);
var sc = new School();
sc.addStudent(s);
sc.addStudent(s1);
sc.getTotalCount();

var Student = /** @class */ (function () {
    function Student(name, studentId, grade, address) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.name + " " + this.studentId + " " + this.address + " " + this.grade);
    };
    return Student;
}());
var s = new Student("Tom", 1, "A", "bov");
s.displayInfo();

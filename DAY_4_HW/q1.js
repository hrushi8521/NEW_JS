var Student = /** @class */ (function () {
    function Student(name, studentId, grade, address) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.name + " " + this.studentId + " " + this.grade + " " + this.address);
    };
    return Student;
}());
var s = new Student("Tom", 68, "A", "Malad");
s.displayInfo();

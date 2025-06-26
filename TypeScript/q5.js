var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.markAttendance = function () {
        console.log("Attendance marked for -> \nStudent Name: ".concat(this.name, " \nRoll No: ").concat(this.rollNo));
    };
    return Student;
}());
var s = new Student("Tom", 100);
s.markAttendance();

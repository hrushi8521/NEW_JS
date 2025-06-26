var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.studentList = [];
        return _this;
    }
    School.prototype.addStudent = function (s) {
        this.studentList.push(s);
    };
    School.prototype.removeStudent = function (id) {
        this.studentList = this.studentList.filter(function (student) {
            return student.id !== id;
        });
        console.log("Student with ID: ".concat(id, " is removed.\n"));
        console.log("Updated Student List: \n", this.studentList);
    };
    School.prototype.getInstitutionType = function () {
        console.log("\nSchool");
    };
    return School;
}(Institute));
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.name = name;
        this.id = id;
    }
    return Student;
}());
var s1 = new Student("Tom", 10);
var s2 = new Student("Larry", 20);
var s3 = new Student("Harry", 30);
var sc = new School();
sc.addStudent(s1);
sc.addStudent(s2);
sc.addStudent(s3);
sc.removeStudent(20);

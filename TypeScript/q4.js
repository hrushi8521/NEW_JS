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
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, id, role) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.id = id;
        _this.role = role;
        return _this;
    }
    Student.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name, " \nID: ").concat(this.id));
    };
    Student.prototype.getRole = function () {
        console.log("Student Role: ".concat(this.role, "\n"));
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, id, role) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.id = id;
        _this.role = role;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name, " \nID: ").concat(this.id, " "));
    };
    Teacher.prototype.getRole = function () {
        console.log("Teaccher Role: ".concat(this.role, "\n"));
    };
    return Teacher;
}(Person));
var sc = new Student("Tom", 10, "Student");
sc.getDetails();
sc.getRole();
var t = new Teacher("Parinita", 10, "Teacher");
t.getDetails();
t.getRole();

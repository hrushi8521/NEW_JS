var Course = /** @class */ (function () {
    function Course(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    Course.prototype.printDetails = function () {
        console.log("Course Name: ".concat(this.courseName, " \nCourse Code: ").concat(this.courseCode, " \nInstructor: ").concat(this.instructor));
    };
    return Course;
}());
var c = new Course("Full Stack Developer", "CS-101", "SDAC");
c.printDetails();

class Course{
    courseName: string;
    courseCode: string;
    instructor: string;

    constructor(courseName:string, courseCode: string, instructor:string){
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }

    printDetails(): void{
        console.log(`Course Name: ${this.courseName} \nCourse Code: ${this.courseCode} \nInstructor: ${this.instructor}`);
        
    }
}

const c = new Course("Full Stack Developer", "CS-101", "SDAC");
c.printDetails();
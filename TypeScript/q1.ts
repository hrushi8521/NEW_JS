class Student{
    name:string
    studentId: number
    grade: string
    address: string

    displayInfo(): void{
        console.log(this.name+" "+this.studentId+" "+this.grade+" "+this.address);
    }

    constructor(name: string, studentId: number, grade:string, address:string){
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }
}

const s = new Student("Tom", 68, "A", "Malad")
s.displayInfo()
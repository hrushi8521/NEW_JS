interface Attendance{
    markAttendance(): void;
}

class Student implements Attendance{
    name: string;
    rollNo: number;
    markAttendance(): void {
        console.log(`Attendance marked for -> \nStudent Name: ${this.name} \nRoll No: ${this.rollNo}`);
        
    }
    constructor(name: string, rollNo: number){
        this.name = name;
        this.rollNo = rollNo;
    }
}

const s = new Student("Tom", 100)
s.markAttendance();
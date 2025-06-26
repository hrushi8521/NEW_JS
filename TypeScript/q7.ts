interface Management{
    addStudent(s:Student): void;
    removeStudent(id: number): void;
}

abstract class Institute{
    abstract getInstitutionType(): void;
}

class School  extends Institute implements Management{
    studentList: Student[] = [];
    addStudent(s:Student): void {
        this.studentList.push(s);
    }
    removeStudent(id: number): void {
        this.studentList = this.studentList.filter((student)=>{
            return student.id !== id
        })
        console.log(`Student with ID: ${id} is removed.\n`);
        console.log(`Updated Student List: \n`,this.studentList);
        
        
    }
    getInstitutionType(): void {
        console.log("\nSchool");
        
    }

}


class Student{
    name:string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const s1 = new Student("Tom", 10);
const s2 = new Student("Larry", 20);
const s3 = new Student("Harry", 30);

const sc = new School();
sc.addStudent(s1)
sc.addStudent(s2)
sc.addStudent(s3)
sc.removeStudent(20)
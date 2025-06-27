class Student{
    name:string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
class School{
    
    static totalStudents: number = 0;
    studentList: Student[] = [];

    addStudent(student): void{
        this.studentList.push(student);
        School.totalStudents += 1; 

        
    }
}

const s1 = new Student("Tom", 10);
const s2 = new Student("Larry", 20);
const s3 = new Student("Mike", 30);

const sc = new School();
sc.addStudent(s1);
sc.addStudent(s2);
sc.addStudent(s3);

console.log("Total students are : " + School.totalStudents);
console.log("Students Details : ", sc.studentList); // ',' before the sc.studentList 



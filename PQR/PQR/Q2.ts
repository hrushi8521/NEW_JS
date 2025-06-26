class Student {
  name: string;
  studentId: number;

  constructor(name: string, studentId: number) {
    this.name = name;
    this.studentId = studentId;
  }
}

class School {
  static totalStudents: number = 0;
  studentList: Student[] = [];

  addStudent(student: Student): void {
    this.studentList.push(student);
    School.totalStudents++;
  }

  getTotalCount(): void {
    console.log(School.totalStudents);
  }
}

const s = new Student("Tom", 1);
const s1 = new Student("Jerry", 2);
const s2 = new Student("Harry", 3);

const sc = new School();
sc.addStudent(s);
sc.addStudent(s1);

sc.getTotalCount();

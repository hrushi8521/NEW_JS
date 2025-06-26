class Student {
  name: string;
  studentId: number;
  grade: string;
  address: string;

  constructor(name: string, studentId: number, grade: string, address: string) {
    this.name = name;
    this.studentId = studentId;
    this.grade = grade;
    this.address = address;
  }

  displayInfo(): void {
    console.log(
      this.name + " " + this.studentId + " " + this.address + " " + this.grade
    );
  }
}
const s = new Student("Tom", 1, "A", "bov");
s.displayInfo();

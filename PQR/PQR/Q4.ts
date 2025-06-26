abstract class Person {
  abstract getDetails(): void;

  abstract getRole(): string;
}

class Student extends Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    super();
    this.id = id;
    this.name = name;
  }
  getDetails(): void {}

  getRole(): string {
    return "Student";
  }
}

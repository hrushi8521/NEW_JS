abstract class Person{
    abstract getDetails(): void;
    abstract getRole(): void;
}

class Student extends Person{
    name:string;
    id: number;
    role: string;
    constructor(name:string, id:number, role:string){
        super();
        this.name = name;
        this.id = id;
        this.role = role;
    }
    getDetails(): void {
        console.log(`Name: ${this.name} \nID: ${this.id}`);
        
    }
    getRole(): void {
        console.log(`Student Role: ${this.role}\n`);
    }
}

class Teacher extends Person{
    name: string;
    id: number;
    role: string;
    constructor(name: string, id: number, role: string) {
        super();
        this.name = name;
        this.id = id;
        this.role = role;
    }
    getDetails(): void {
        console.log(`Name: ${this.name} \nID: ${this.id} `);
    }
    getRole(): void {
        console.log(`Teaccher Role: ${this.role}\n`);
        
    }
}

const sc = new Student("Tom", 10, "Student");
sc.getDetails();
sc.getRole();

const t = new Teacher("Parinita", 10, "Teacher");
t.getDetails();
t.getRole();

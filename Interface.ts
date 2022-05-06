interface Person{
    name: String;
    age: number;
    getPerson():string;
}
class Employee implements Person{
    name: String;
    age: number;
    salary: number;
    constructor(name:string, age:number, salary:number){
      this.name = name;
      this.age = age;
      this.salary=salary;
    }
    getPerson=(): string=>{
        return "Name:"+this.name+"Age:"+this.age+"Salary:"+this.salary;
    }
}
let per:Person = new Employee('Mahesh',22,25000);
console.log(per.getPerson());
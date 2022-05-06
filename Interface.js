var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        var _this = this;
        this.getPerson = function () {
            return "Name:" + _this.name + "\nAge:" + _this.age + "\nSalary:" + _this.salary;
        };
        this.name = name;
        this.age = age;
        this.salary=salary;
    }
    return Employee;
}());
var obj = new Employee('Mahesh', 22, 25000);
console.log(obj.getPerson());

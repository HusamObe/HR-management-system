'use strict';


const arrEmpolyee = [];
const form = document.getElementById("employee-form");
console.log(form);
function Employee(id, name, department, level, img) {
    this.employeeID = id;
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.department;
    this.img = img;

    arrEmpolyee.push(this);
}

Employee.prototype.salaryCalc = function () {
    const salaryRanges = {
        'Senior': [1500, 2000],
        'Mid-Senior': [1000, 1500],
        'Junior': [500, 1000]
    };
    const [minSalary, maxSalary] = salaryRanges[this.level];
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const netSalary = Math.floor(randomSalary * (1 - 0.075));
    return netSalary;
}



Employee.prototype.renderInfo = function () {
    document.write(`<h1>Name: ${this.fullName} ,Salary= ${this.salaryCalc()} </h1>`);

}

form.addEventListener("submit", submitEventHandler);



function submitEventHandler(event) {
    event.preventDefault();
    window.alert("hello");
    let fullName = document.getElementById("fullname").value;
    let department = document.getElementById("department").value;
    let level = document.getElementById("level").value;
    let imageUrl = document.getElementById("imageurl").value;

    let employeeId = generateEmployeeId();

}

function generateEmployeeId() {
    let id = "";
    const digits = "0123456789";
    for (let i = 0; i < 4; i++) {
        id += digits[Math.floor(Math.random() * 10)];
    }
    return id;
}

for (let i = 0; i < arrEmpolyee.length; i++) {
    arrEmpolyee[i].renderInfo();
}

const employee1 = new Employee(1000, ["Ghazi", "Samer"], "Administration", 'Senior', "./Mark-Zuckerberg.jpg");
const netSalary1 = employee1.salaryCalc();

const employee2 = new Employee(1001, ["Lana", "Ali"], "Finance", 'Senior', "./Mark-Zuckerberg.jpg");
const netSalary2 = employee2.salaryCalc();

const employee3 = new Employee(1002, ["Tamara", "Ayoub"], "Marketing", 'Senior', "./Mark-Zuckerberg.jpg");
const netSalary3 = employee3.salaryCalc();

const employee4 = new Employee(1003, ["Safi", " Walid"], "Administration", 'Mid-Senior', "./Mark-Zuckerberg.jpg");
const netSalary4 = employee4.salaryCalc();

const employee5 = new Employee(1004, ["Omar", "Zaid"], "Development", 'Senior', "./Mark-Zuckerberg.jpg");
const netSalary5 = employee5.salaryCalc();

const employee6 = new Employee(1005, ["Rana", "Saleh"], "Development", 'Junior', "./Mark-Zuckerberg.jpg");
const netSalary6 = employee6.salaryCalc();

const employee7 = new Employee(1006, ["Hadi", "Ahmad"], "Finance", 'Mid-Senior', "./Mark-Zuckerberg.jpg");
const netSalary7 = employee7.salaryCalc();


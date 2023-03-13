'use strict'

const allEmployees = [];
let empForm = document.getElementById("form");
let empCard = document.getElementById("empCard");



function Employee(name, department, level, image) {
    this.id = generateRandomId();
    this.name = name;
    this.department = department;
    this.level = level;
    this.imgUrl = image;
    this.salary = this.salaryCalc();

}


Employee.prototype.salaryCalc = function () {
    let salaryLevel = 0;
    switch (this.level) {
        case "Junior":
            salaryLevel = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
            break;
        case "Mid-Senior":
            salaryLevel = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
            break;
        case "Senior":
            salaryLevel = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
            break;
    }

    return (salaryLevel * (1 - 0.075));
}

Employee.prototype.renderData = function () {
    let imgSection = document.createElement("div");
    imgSection.innerHTML = `
    <div class="employeeCard">
    <img src="${this.imgUrl}" alt="img">
        <p>Name : ${this.name} - ID : ${this.id} - Department : ${this.department} - Level : ${this.level} - Salary : ${this.salary} </p>
        </div>`;
    empCard.appendChild(imgSection);
}

empForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    let fullName = (event.target.name.value);
    let depar = (event.target.department.value);
    let empLevel = (event.target.level.value);
    let imageURL = (event.target.img.value);

    let newEmployee = new Employee(fullName, depar, empLevel, imageURL);
    newEmployee.salaryCalc();
    newEmployee.renderData();
    allEmployees.push(newEmployee);
}


function generateRandomId() {
    return Math.floor(1000 + Math.random() * 9000);
}
'use strict';



function Employee(name, department, level, image, id, salary) {
    this.name = name;
    this.department = department;
    this.level = level;
    this.imgUrl = image;
    if (id != undefined) {
        this.id = id;
        this.salary = salary;
    }
    else {
        this.id = generateRandomId();
        this.salary = this.salaryCalc();
    }
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

    return Math.floor(salaryLevel * (1 - 0.075));
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

function initEmployees(render) {
    let storedData = localStorage.getItem('All Employees');
    if (!!storedData) {
        allEmployees = JSON.parse(storedData);
        for (let i = 0; i < allEmployees.length; i++) {

            let newEmployee = new Employee(
                allEmployees[i].name,
                allEmployees[i].department,
                allEmployees[i].level,
                allEmployees[i].imgUrl,
                allEmployees[i].id,
                allEmployees[i].salary
            );

            newEmployee.salaryCalc();
            if (render) { newEmployee.renderData(); }

        }
    }
    // should handle empty storage
}



function generateRandomId() {
    return Math.floor(1000 + Math.random() * 9000);
}

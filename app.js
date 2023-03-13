'use strict';


let allEmployees = [];
let empForm = document.getElementById("form");
let empCard = document.getElementById("empCard");


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


    localStorage.setItem('All Employees', JSON.stringify(allEmployees));
}

initEmployees(true);



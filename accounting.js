'use strict';


const AllDepartments = {
    Administraion: new Department("administraion"),
    Marketing: new Department("marketing"),
    Development: new Department("development"),
    Finance: new Department("finance"),
    Not_assigned: new Department("not assigned"),
    All: new Department("All Department")
};



let allEmployees = [];
let departmentsTable = document.getElementById("departmentsTable");


console.log(AllDepartments);

function Department(departmentName) {
    this.name = departmentName;
    this.employees = [];
    this.totalSalary = 0;
}

Department.prototype.addEmployee = function (employee) {

    this.employees.push(employee);
    this.totalSalary += employee.salary;

}


function initDepartments() {
    for (let i = 0; i < allEmployees.length; i++) {
        AllDepartments.All.addEmployee(allEmployees[i]);
        switch (allEmployees[i].department) {
            case "administraion":
                AllDepartments.Administraion.addEmployee(allEmployees[i]);
                break;
            case "marketing":
                AllDepartments.Marketing.addEmployee(allEmployees[i]);
                break;
            case "development":
                AllDepartments.Development.addEmployee(allEmployees[i]);
                break;
            case "finance":
                AllDepartments.Finance.addEmployee(allEmployees[i]);
                break;
            default:
                AllDepartments.Not_assigned.addEmployee(allEmployees[i]);
        }
    }
}


function renderTable() {
    let tableSection = document.createElement("div");
    let departmentRow = "";
    departmentRow += addDepartmentRow(AllDepartments.Administraion);
    departmentRow += addDepartmentRow(AllDepartments.Finance);
    departmentRow += addDepartmentRow(AllDepartments.Development);
    departmentRow += addDepartmentRow(AllDepartments.Marketing);
    departmentRow += addDepartmentRow(AllDepartments.Not_assigned);
    departmentRow += addDepartmentRow(AllDepartments.All, true);
    tableSection.innerHTML = `
    <div class="departmentTable">
    <table><tr>
    <th>Department Name</th>
    <th># employees</th>
    <th>Average salary</th>
    <th>Total Salary</th>
  </tr>${departmentRow}
        
    </table></div>`;
    departmentsTable.appendChild(tableSection);
}

function addDepartmentRow(department, isFooter) {
    return `<tr><td>${department.name}</td>
    <td>${department.employees.length}</td>
    <td>${department.avgSalary()}</td>
    <td>${department.totalSalary}</td>  
    </tr>`
}


Department.prototype.avgSalary = function () {
    if (this.employees.length == 0) { return 0; }

    return (this.totalSalary / this.employees.length).toFixed(3);
}



initEmployees(false);
initDepartments();

renderTable();
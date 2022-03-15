//Named export
export class Employee {
    constructor(empId,empName,salary){
        this.empId=empId;
        this.empName=empName;
        this.salary=salary
    }

    employeeData(){
        console.log("Employee Id :",this.empId)
        console.log("Employee Name :",this.empName)
        console.log("Salary",this.salary)
    }
}
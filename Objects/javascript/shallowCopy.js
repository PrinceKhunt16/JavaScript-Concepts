var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log(employee);

var newEmployee = employee; 

console.log(newEmployee);

newEmployee.ename = "Beck";

console.log(employee);

console.log(newEmployee);
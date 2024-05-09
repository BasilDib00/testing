const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "Java" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "JavaScript" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Python" },
    //... More employee records can be added here
  ];

   // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
        }
    }

    function displayJSEmployees() {
        // Find the first employee with specialization in JavaScript
        const jsEmployee = employees.find(employee => employee.specialization === 'JavaScript');
    
        if (jsEmployee) {
            // If a JavaScript employee is found, display their details
            const jsEmployeeDetails = `<p>${jsEmployee.id}: ${jsEmployee.name} - ${jsEmployee.department} - $${jsEmployee.salary} - ${jsEmployee.specialization}</p>`;
            document.getElementById('employeesDetails').innerHTML = jsEmployeeDetails;
        } else {
            // If no JavaScript employee is found, display a message
            document.getElementById('employeesDetails').innerHTML = 'No employee found with specialization in JavaScript.';
        }
    }
    
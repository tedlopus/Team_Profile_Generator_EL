//create a constructor class for the employee card
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getEmployeeName() {
      return this.name;
    }
  
    getEmplyeeId() {
      return this.id;
    }
    
    getEmployeeEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  }
  
  module.exports = Employee;
  
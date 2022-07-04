class Employee {
    constructor(employee) {
        this.name = employee.name,
        this.id = employee.id,
        this.email = employee.email
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;
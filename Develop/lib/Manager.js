const Employee = require("./Employee");

class Manager extends Employee {

    constructor(role) {
        super(role)
        this.officeNumber = role.officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
    
}

module.exports = Manager;
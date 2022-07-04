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

// const role = {
//     name: 'owen',
//     email: 'email',
//     id: '1',
//     office: '7'
// }
// const manager = new Manager(role)

// console.log(manager.constructor.name)
module.exports = Manager;
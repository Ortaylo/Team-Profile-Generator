const Employee = require("./Employee");

class Intern extends Employee {

    constructor(role) {
        super(role)
        this.school = role.school
    }

    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
    
}

// const role = {
//     name: 'owen',
//     email: 'email',
//     id: '1',
//     office: '7'
// }
// const Intern = new Intern(role)

// console.log(intern.constructor.name)
module.exports = Intern;
const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(role) {
        super(role)
        this.github = role.github
    }

    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
    
}

// const role = {
//     name: 'owen',
//     email: 'email',
//     id: '1',
//     office: '7'
// }
// const Engineer = new Engineer(role)

// console.log(Engineer.constructor.name)
module.exports = Engineer;
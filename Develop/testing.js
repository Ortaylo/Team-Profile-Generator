const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const roleData = {
    name: 'owen',
    email: 'email1',
    id: '1',
}
const roleDataManager = {
    name: 'owen2',
    email: 'email123',
    id: '17',
    officeNumber: '3'
}
const roleDataEnginner = {
    name: 'owen3',
    email: 'enginner.com',
    id: '6',
    github: 'github.com/engineer'
}
const roleDataIntern = {
    name: 'owen3',
    email: 'enginner.com',
    id: '6',
    school: 'github university'
}
const employee = new Employee(roleData)
const manager = new Manager(roleDataManager)
const engineer = new Engineer(roleDataEnginner)
const intern = new Intern(roleDataIntern)
console.info(employee);
console.log(manager);
console.log(engineer);
console.log(intern);
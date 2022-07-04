const Employee = require('../lib/Employee')

test('creates Employee object', () => {
    const testData = {
        name: 'owen',
        email: 'myemail1@yahoo.com',
        id: '1',
    }
    const employee = new Employee(testData)

    expect(employee.getName()).toBe('owen');
    expect(employee.getEmail()).toBe('myemail1@yahoo.com')
    expect(employee.getId()).toBe('1')
    expect(employee.getRole()).toBe('Employee')
})
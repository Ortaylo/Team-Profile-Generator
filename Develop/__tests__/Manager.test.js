const Manager = require('../lib/Manager')


test('creates Manager object', () => {
    const testData = {
        name: 'owen',
        email: 'myemail1@yahoo.com',
        id: '1',
        officeNumber: '7'
    }
    const manager = new Manager(testData)

    expect(manager.getName()).toBe('owen');
    expect(manager.getEmail()).toBe('myemail1@yahoo.com');
    expect(manager.getId()).toBe('1');
    expect(manager.getOfficeNumber()).toBe('7');
    expect(manager.getRole()).toBe('Manager')

})
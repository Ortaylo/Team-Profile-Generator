const Intern = require('../lib/Intern')


test('creates Intern object', () => {
    const testData = {
        name: 'owen',
        email: 'myemail1@yahoo.com',
        id: '1',
        school: 'github uni'
    }
    const intern = new Intern(testData)

    expect(intern.getName()).toBe('owen');
    expect(intern.getEmail()).toBe('myemail1@yahoo.com');
    expect(intern.getId()).toBe('1');
    expect(intern.getSchool()).toBe('github uni');
    expect(intern.getRole()).toBe('Intern')

})
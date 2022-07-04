const Engineer = require('../lib/Engineer')


test('creates Engineer object', () => {
    const testData = {
        name: 'owen',
        email: 'myemail1@yahoo.com',
        id: '1',
        github: 'github.com/enginner'
    }
    const engineer = new Engineer(testData)

    expect(engineer.getName()).toBe('owen');
    expect(engineer.getEmail()).toBe('myemail1@yahoo.com');
    expect(engineer.getId()).toBe('1');
    expect(engineer.getGithub()).toBe('github.com/enginner');
    expect(engineer.getRole()).toBe('Engineer')

})
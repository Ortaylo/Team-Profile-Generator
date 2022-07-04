const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];
const roleData = {};
const questions = {
    nameQuestion: {
        type: 'input',
        name: 'name',
        message: 'Enter Name: '
    },
    idQuestion: {
        type: 'input',
        name: 'id',
        message: 'Enter ID: '
    },
    emailQuestion: {
        type: 'input',
        name: 'email',
        message: 'Enter email address: '
    },

    officeQuestion: {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Office Number: '
    },
    githubQuestion: {
        type: 'input',
        name: 'github',
        message: 'Enter Github Username: '
    },
    schoolQuestion: {
        type: 'input',
        name: 'school',
        message: 'Enter School: '
    },
    roleQuestion: {
        type: 'list',
        name: 'role',
        choices:['Engineer','Intern','Finish']
    }
}

async function createRole(role) {

    await inquirer.prompt(questions.nameQuestion).then((data) => {
        roleData.name = data.name;
    })
    await inquirer.prompt(questions.emailQuestion).then((data) => {
        roleData.email = data.email;
    })
    await inquirer.prompt(questions.idQuestion).then((data) => {
        roleData.id = data.id;
    })
    if(role == 'Manager') {
        await inquirer.prompt(questions.officeQuestion).then((data) => {
            roleData.officeNumber = data.officeNumber;
            const manager = new Manager(roleData);
            console.log(manager);
            manager.role = 'Manager';
            team.push(manager);
        })
    } else if(role == 'Engineer') {
        await inquirer.prompt(questions.githubQuestion).then((data) => {
            roleData.github = data.github;
            const engineer = new Engineer(roleData);
            console.log(engineer);
            engineer.role = 'Engineer';
            team.push(engineer);
        })
    } else {
        await inquirer.prompt(questions.schoolQuestion).then((data) => {
            roleData.school = data.school;
            const intern = new Intern(roleData);
            console.log(intern);
            intern.role = 'Intern'
            team.push(intern);
        })
    }
    getRole()
}

function getRole(tracker) {
    
    if (tracker == 0) {
            tracker++
            createRole('Manager');
    } else {
        inquirer.prompt(questions.roleQuestion).then((data) => {
            console.log(data)
            if(data.role == 'Finish') {
                console.log('finshed');
                console.log(team);
                Finish(team);
                return;
            } else{
                createRole(data.role)
            }
        })
    }


}

var teamHtml = '';

function Finish(team) {
    fs.unlink('dist/index.html', (err) => {
        if (err){
            console.log(err)
        }else {
            console.log('file removed')
        }
    }) 

    for(var i=0;i<team.length;i++) {
        let roleExtra;
        if (team[i].officeNumber){
            roleExtra = 'OfficeNumber: ' + team[i].officeNumber
        } else if (team[i].github){
            roleExtra = 'Github: ' + team[i].github
        }else if (team[i].school){
            roleExtra = 'School: ' + team[i].school;
        }
        teamHtml = teamHtml +
        `
        <article class="col-3">
        <div>
            <h3>${team[i].name}</h3>
            <h5>${team[i].role}</h5>
        </div>    
            <ul>
                <li>ID: ${team[i].id}</li>
                <li>email: ${team[i].email}</li>
                <li>${roleExtra}</li>
            </ul>
        </article>
        `
    }
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    <ul class="row">
    ${teamHtml}
    </ul>
    </body>
    </html>`
    fs.appendFile('dist/index.html', html ,error => {
        console.error(error)
    })
    
}

//createManager(tracker);


getRole(0);

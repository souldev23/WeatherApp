//This way to use inquirer works fine with inquirer version 8.2.5
const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.red} Search for a city`
            },
            {
                value: 2,
                name: `${'2.'.red} Historical`
            },
            {
                value: 0,
                name: `${'0.'.red} Exit`
            },
        ]
    }
];

const inquireMenu = async() => {
    console.clear();
    console.log('============================='.green);
    console.log(`${'===='.green}  ${'Select an option'.bold}   ${'===='.green}`);
    console.log('=============================\n'.green);

    const {option} = await inquirer.prompt(questions);
    
    return option;
};

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`
        }

    ];
    console.log('\n');
    await inquirer.prompt(question);
};

const readInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'city',
        message,
        validate(value){
            if(value.length === 0){
                return 'Please type a value';
            }
            return true;
        }
    }];

    const {city} = await inquirer.prompt(question);
    return city;
};

const listTasksToDelete = async( tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });
    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancel.`
    });
    const questions = [{
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    }];
    const {id} = await inquirer.prompt(questions);
    return id;
};

const listTasksToComplete = async( tasks = []) => {

    const choices = tasks.map( (task, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: task.completedOn? true : false
        }
    });    
    const questions = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selections',
        choices
    }];
    const {ids} = await inquirer.prompt(questions);
    return ids;
};

const getConfirm = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'response',
        message
    }];
    const {response} = await inquirer.prompt(question);  
    return response;
};

module.exports = {
    inquireMenu,
    pause,
    readInput,
    listTasksToDelete,
    getConfirm,
    listTasksToComplete
}
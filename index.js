#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Do You Know RANIT? \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n You know Ranit well!`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');

        console.log(
            chalk.green(
                `Knowing people is the key to good communication.`
            )
        );
        process.exit(0);
    });
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Where is Ranit currently pursuing his higher education?\n',
        choices: [
            'College of Engineering & Management, Kolaghat',
            'IIT Kharagpur',
            'NIT Durgapur',
            'Jadavpur University',
        ],
    });

    return handleAnswer(answers.question_1 === 'College of Engineering & Management, Kolaghat');
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Which programming languages is Ranit proficient in?\n',
        choices: ['HTML, CSS, JavaScript, Java, Python', 'C++, Python, Ruby', 'Swift, Kotlin, Java', 'PHP, Perl, Go'],
    });
    return handleAnswer(answers.question_2 === 'HTML, CSS, JavaScript, Java, Python');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'What is Ranit\'s native language?\n',
        choices: ['Hindi', 'English', 'Bengali', 'Tamil'],
    });

    return handleAnswer(answers.question_3 === 'Bengali');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Which social media platform does Ranit use for professional networking?\n',
        choices: [
            'Facebook',
            'Twitter',
            'LinkedIn',
            'Instagram',
        ],
    });
    return handleAnswer(answers.question_4 === 'LinkedIn');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message:
            'What is Ranit currently studying?\n',
        choices: ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering'],
    });

    return handleAnswer(answers.question_5 === 'Computer Science');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();

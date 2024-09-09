#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greedings = () => {
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

export default greedings;
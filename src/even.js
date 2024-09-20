#!/usr/bin/env node
import * as readlineSync from 'readline-sync';

const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomDecimal = Math.floor(Math.random() * (100)) + 1;
    console.log(`Question: ${randomDecimal}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomDecimal % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (randomDecimal % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (randomDecimal % 2 === 0 && userAnswer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}`)
      break;
    } else if (randomDecimal % 2 !== 0 && userAnswer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}`)
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default checkEven;

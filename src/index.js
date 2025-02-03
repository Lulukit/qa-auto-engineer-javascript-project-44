import readlineSync from 'readline-sync';

export const greetings = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(gameDescription);
  return name;
};

export const game = (userName, generateQuestion) => {
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer: correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
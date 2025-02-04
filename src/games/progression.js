const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const description = 'What number is missing in the progression?';

export const generateQuestion = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const answer = progression[hiddenIndex].toString();

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

export default generateQuestion;

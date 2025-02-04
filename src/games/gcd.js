export const description = 'Find the greatest common divisor of given numbers.';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

export const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = calculateGCD(num1, num2).toString();

  return { question, answer };
};

export default generateQuestion;

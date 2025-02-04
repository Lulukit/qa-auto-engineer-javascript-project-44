const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateQuestion = () => {
  const number = getRandomNumber(1, 100);
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';

  return { question, answer };
};

export default generateQuestion;

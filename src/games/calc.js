const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const generateQuestion = () => {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const operation = getRandomOperation();

  let question; let
    answer;

  switch (operation) {
    case '+':
      question = `${num1} + ${num2}`;
      answer = (num1 + num2).toString();
      break;
    case '-':
      question = `${num1} - ${num2}`;
      answer = (num1 - num2).toString();
      break;
    case '*':
      question = `${num1} * ${num2}`;
      answer = (num1 * num2).toString();
      break;
    default:
      throw new Error(`Unexpected operation: ${operation}`);
  }

  return { question, answer };
};

export default generateQuestion;

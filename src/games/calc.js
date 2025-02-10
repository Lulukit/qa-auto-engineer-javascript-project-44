const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unexpected operation: ${operation}`);
  }
};

export const description = 'What is the result of the expression?';

export const generateQuestion = () => {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const operation = getRandomOperation();

  const question = `${num1} ${operation} ${num2}`;
  const answer = calculateExpression(num1, num2, operation).toString();

  return { question, answer };
};

export default generateQuestion;

#!/usr/bin/env node
import { greetings, game } from '../src/index.js';
import { generateQuestion } from '../src/games/calc.js';

const playCalcGame = () => {
  const userName = greetings();
  game(userName, generateQuestion);
};

playCalcGame();

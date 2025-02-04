#!/usr/bin/env node
import { greetings, game } from '../src/index.js';
import { generateQuestion, description } from '../src/games/calc.js';

const playCalcGame = () => {
  const userName = greetings(description);
  game(userName, generateQuestion);
};

playCalcGame();

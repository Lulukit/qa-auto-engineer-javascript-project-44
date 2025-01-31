#!/usr/bin/env node
import { greetings, game } from '../src/index.js';
import { generateQuestion, description } from '../src/games/gcd.js';

const playGcdGame = () => {
  const userName = greetings(description);
  game(userName, generateQuestion);
};

playGcdGame();
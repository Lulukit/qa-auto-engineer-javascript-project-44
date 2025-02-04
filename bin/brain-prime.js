#!/usr/bin/env node
import { greetings, game } from '../src/index.js';
import { generateQuestion, description } from '../src/games/prime.js';

const playPrimeGame = () => {
  const userName = greetings(description);
  game(userName, generateQuestion);
};

playPrimeGame();

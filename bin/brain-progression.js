#!/usr/bin/env node
import { greetings, game } from '../src/index.js';
import { generateQuestion, description } from '../src/games/progression.js';

const playProgressionGame = () => {
  const userName = greetings(description);
  game(userName, generateQuestion);
};

playProgressionGame();

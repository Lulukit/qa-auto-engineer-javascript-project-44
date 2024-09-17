# Makefile
install: 
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish: 
	npm publish --dry-run

make lint:
	npx eslint .

make lintfix:
	npx eslint --fix .

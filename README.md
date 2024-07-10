# wdi-fundamentals-memorygame

## Intention

This was part of my pre course material designed to get my familiar with programming languages such as:

- HTML
- CSS
- JavaScript

## Game Play

The game is simply to match 2 cards and show a prompt.

## Code

The way the code is designed is to use **HTML** to create a basic layout and have **Javascript** target the **HTML** to handle creating elements and game-play logic.

In `main.js` a function creates elements based off the data stored in an object. This utilizes one `back.png` for all cards.

There is a flip functions which looks at data stored in the element to determine which image to show and to see if there is a match.

## Problems

The only problem I was facing was with deployment to github, specifically with the **images**.

I had to make sure the src path to the images was relative to the `index.html` file and not that `main.js` file where the code to create the `img` tag exists.

# even-stevens-solver

## Overview
Even Stevens is a puzzle game designed for passing the time with some heavy thinking. It's like a sudoku puzzle in a deck of cards!
Your main goal will be collecting perfectly even sets out of a pile of 7 cards. You win when you collect almost the whole deck and can predict what the last card is out of what's left.

## Setup
Take a standard 52 deck of cards. Remove the 9s through Kings and return them to the box. Aces have a value of 1. Form a draw pile with the remaining 32 cards.
### Solitaire
Draw 7 cards to form a hand.
### Multiplayer
Take 7 cards and put them face-up on the table so they’re all clearly visible if playing with multiple people.


Object
Collect groups of four that satisfy the “Four Set” property.
Gameplay
This game has no turns. As soon as you see a group of four that make a valid set among the face-up cards in the middle, say “Set!” then touch them. Once everyone has confirmed it’s a set, the player that found them gathers the cards in the set they found and keeps them face down in front of them. Draw new cards to get the total back up to 7.

## Game end
When there is only one card left in the deck, do not draw it. Look at all of the cards and try to deduce what card it should be. If you've collected all valid sets, then the final card when added to the remaining uncollected cards should all form a final set. If your prediction is right, you win! If not, trace back through the sets you collected and try to see where you went wrong.

Small footprint solitaire play
To play solitaire, draw four cards in your hand. Draw one card at a time, only when you’re certain a set does not exist out of the cards in your hand. Feel free to rearrange and sort your hand as much as it helps you. Once you find a set, discard them from your hand, and draw your hand back up to four cards. Repeat and see how fast you can go through the whole deck, or go leisurely to pass the time.

## Even Stevens properties
Each number has three properties: it is either even (2,4,6,8) or odd (1,3,5,7), it is either high (5,6,7,8) or low (1,2,3,4), and it is either a middle card (1,2,7,8) or an outside card (3,4,5,6). Suits also have two properties: they can be red or black, and they can be “major suits” (hearts/spades) or “minor suits” (diamonds/clubs).

An Even Stevens set means that for all these number and suit properties, there are an even number of cards for all these properties.

If you collect a set of four, for each property, the four cards either all match, or are split two-and-two.

### Examples
`1h, 2h, 3h, 4h` makes a set because 4 are low, 4 are red, 4 are major suits, and it’s a 2-2 split between odd and even, and a 2-2 split between middle and outside cards

`3s, 3c, 6s, 6c` makes a set because 2 are even, 4 are middle, 4 are black, 2 are major suits, and 2 are low

`1h, 4c, 6d, 7s` makes a set because every single subproperty has 2 that are one way and 2 that are the opposite

`3d, 1s, 7h, 2s, 8d, 3h` makes a set because 2 are high, 4 are low, 

### Stuck?
Try [this solver](https://jherndon8.github.io/even-stevens-solver/)

## Challenge mode
Find a second deck that has a distinguishable front from the original deck (I find gift shop cards work better than standard cards for this). Now being in one deck vs. the other becomes another property to keep track of, and you have twice as many cards to get through. For this challenge mode, you will need to draw 8 cards instead of 7.
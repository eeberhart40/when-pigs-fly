# when-pigs-fly

### Background and Overview
`When Pigs Fly` is a fanciful barnyard take on the classic helicopter game. The game will center on a winged pig.  The user will use the spacebar to navigate the pig up and down on a 2-D board. Obstacles like pitchforks, fence-posts and birds will come into view as the board scrolls. If the pig collides with an obstacle the game ends. Points accrue as time elapses. Local storage will save the top 10 scores. There will be a farm/barnyard theme. Hoedown music will play in the background and a `toggle music` button will allow users to turn the music on or off.

### Functionality and MVP
In `When Pigs Fly` users will be able to:
- [x] move the flying pig up and down on the board
- [x] toggle the sound on and off
- [x] enter initials if they acheive a top ten score

### Wireframes
This app will consist of a single screen with the simulation canvas and nav links to the Github and my Repo. The toggle music will be on the left and the tops scores menue will be on the right.
![WireFrame](https://github.com/eeberhart40/when-pigs-fly/blob/master/when%20pigs%20fly%20wire%20frame.png)

### Architecture and Technologies
This project will be implemented with the following technologies:
* `Vanilla JavaScript` for overall structure and game logic
* `HTML5 Canvas` for DOM manipulation and rendering
* `Webpack` to bundle and serve up the scripts

### Main files
In addition to the webpack entry file and an image file containing sprite images, there will be five scripts involved in this project:
`game.js`: this will handle the game logic and the main structure of the canvas
`board.js`: responsible for rendering the the board
`player.js`: takes input from user and adjusts the position of the pig accordingly
`obstacle.js`: handles individual obstacles
`scoreboard.js`: fetches top 10 scores from local state

### Development Timeline
#### Day 1 (2/6/19)
* find background and board images
* figure out what file will render the background image
* determine how to scroll the board image indefinitely
* Create sprite image file(s) for flying pig, birds, pitchfork, fence post, wheel barrow

#### Day 2
 * write logic for pig flight
 * achieve user manipulation

#### Day 3
* write logic for obstacles
* figure out collission logic
* determine how to save top scores in local state

#### Weekend
* add music
* add music toggle
* debug
* style

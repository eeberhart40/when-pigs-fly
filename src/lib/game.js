import Board from './board';

class Game {
    constructor(){
        this.gameOver = false;
        this.board = new Board();
    }

    play(){
        this.board.render();

    }
  
}

export default Game;
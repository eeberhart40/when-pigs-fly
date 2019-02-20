import{ fetchHighScores } from './highScore';

class TopScores {
    constructor(props){
        super(props);
        this.topScores = [];
        this.topScoresList = document.getElementById("top-scores");
        this.scoreBoard = document.getElementById("top-scores-container");
        this.loaded = false;
    }

    getScores(){
        fetchHighScores().then(scores => {
            scores.forEach(score => {
              this.topScores.push[score.data()];
            });
        });
        this.loaded = true;
    }

    renderTopScores(){
        if(!this.loaded) {
            this.scoreBoard.innerText("loading...");
        } else if (this.loaded && this.topScores.length === 0){
            this.scoreBoard.innerText("NO HIGHSCORES YET");
        }

        this.topScores.forEach((entry, idx) => {
            let scoreLi = document.createElement('li');
            scoreLi.innerText(`${idx}: ${entry.name}- ${entry.points}`);
            this.topScoresList.appendChild(scoreLi);

        })
    }


}

module.exports = TopScores;
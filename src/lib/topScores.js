import{ fetchHighScores } from './highScore';

class TopScores {
    constructor(){
        this.topScores = [];
        this.topScoresList = document.getElementById("top-scores");
        this.scoreBoard = document.getElementById("top-scores-container");
        // this.loaded = false;
        this.renderTopScores = this.renderTopScores.bind(this);
    }

    getScores(){
        fetchHighScores().then(scores => {
            debugger
            scores.forEach(score => {
              this.topScores.push(score.data());
            });
        }).then(() => {
            this.renderTopScores();
        });

        // debugger
        // // this.loaded = true;
    }

    renderTopScores(){
        // debugger
        if(this.topScores.length === 0){
            this.scoreBoard.innerText = "NO HIGHSCORES YET";
        }

        this.topScores.forEach((entry, idx) => {
            let scoreLi = document.createElement('li');
            scoreLi.innerText = `${idx + 1}: ${entry.name}, ${entry.points}`;
            this.topScoresList.appendChild(scoreLi);

        })
    }


}

export default TopScores;
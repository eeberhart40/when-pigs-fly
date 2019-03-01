import { postScore } from './highScore';
import TopScores from './topScores';

class ScoreForm {
    constructor(){
        // this.points = points;
        this.form = document.getElementById("high-score-form");
        this.nameInput = document.getElementById("name-input");
        this.topScores = new TopScores();
    }

    getScore(points){
        this.form.classList.remove('hidden');
        this.nameInput.addEventListener("input", () => {
            if (this.nameInput.value.match(/\s|\./g)) {
                this.nameInput.value = this.nameInput.value.replace(/\s/g, "");
            }
        })

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(this.nameInput.value !== "") {
                postScore(this.nameInput.value, points);
                this.topScores.updateScores();
                this.nameInput.value = "";
                this.nameInput.disabled = true;
                this.nameInput.placeholder = "Score submitted";
                this.form.style.display = 'none';
            }
        })
    }

}

export default ScoreForm;
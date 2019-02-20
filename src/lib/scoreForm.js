import { postScore } from './highScore';

class ScoreForm {
    constructor(props){
        super(props);

        // this.points = points;
        this.form = document.getElementById("high-score-form");
        this.nameInput = document.getElementById("name-input");
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
                this.nameInput.value = "";
                this.nameInput.disabled = true;
                this.nameInput.placeholder = "Score submitted";

                window.setTimeout(this.form.classList.add('hidden'), 2000);
            }
        })
    }

}

module.exports = ScoreForm;
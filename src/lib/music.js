
class MusicButton {
    constructor(){
        this.button = document.getElementById("music-btn");
        this.audio = document.getElementById("audio");
        this.toggleMusic = this.toggleMusic.bind(this);
    }

    setup(){
        this.audio.play();

        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            this.toggleMusic();
        });
    }

    toggleMusic(){
        return this.audio.paused ? this.audio.play() : this.audio.pause();
    }
}

export default MusicButton;
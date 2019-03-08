
class MusicButton {
    constructor(){
        this.button = document.getElementById("music-btn");
        this.audio = document.getElementById("audio");
        this.audio.volume = 0.3;
        this.toggleMusic = this.toggleMusic.bind(this);
    }

    setup(){
        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            this.toggleMusic();
        });
        this.audio.play();
    }

    toggleMusic(){
        return this.audio.paused ? this.audio.play() : this.audio.pause();
    }

}

export default MusicButton;
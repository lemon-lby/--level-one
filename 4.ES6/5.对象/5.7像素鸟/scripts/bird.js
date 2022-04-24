const birdDom = document.querySelector(".bird");
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const gameDom = document.querySelector(".game");
const gameHeight = gameDom.clientHeight;


class Bird extends rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdTop, birdLeft, 0, 0, birdDom);
        this.g = 1500;
        this.maxY = gameHeight - landHeight - this.height;
        this.timer = null;
        this.swingStatus = 1;
    }
    move(duration) {
        super.move(duration);
        this.ySpeed += this.g * duration;
    }
    onmove() {
        if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }
    jump() {
        this.ySpeed = -550;
    }
    startSwing() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus++;
            if (this.swingStatus === 4) {
                this.swingStatus = 1;
            }
        }, 300);
    }
    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }
    render() {
        super.render();
        this.dom.className = `bird swingStatus${this.swingStatus}`;
    }
}

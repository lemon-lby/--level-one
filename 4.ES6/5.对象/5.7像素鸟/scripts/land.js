const landDom = document.querySelector(".land");
const landStyles = getComputedStyle(landDom);
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top);
class Land extends rectangle {
    constructor(speed) {
        super(landWidth, landHeight, landTop, 0, speed, 0, landDom);
    }
    onmove() {
        if (this.left <= -landWidth / 2) {
            this.left = 0;
        }
    }
}

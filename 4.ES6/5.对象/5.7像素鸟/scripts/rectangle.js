class rectangle {
    constructor(width, height, top, left, xSpeed, ySpeed, dom) {
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;
    }
    render() {
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.top = this.top + "px";
        this.dom.style.left = this.left + "px";
    }
    move(duration) {
        const xDis = this.xSpeed * duration;
        const yDis = this.ySpeed * duration;
        this.left = this.left + xDis;
        this.top = this.top + yDis;
        if (this.onmove) {
            this.onmove();
        }
        this.render();
    }

}






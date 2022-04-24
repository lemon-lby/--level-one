const gameWidth = gameDom.clientWidth;

class Pipe extends rectangle {
    constructor(height, top, speed, dom) {
        super(52, height, top, gameWidth, speed, 0, dom);
    }
    onmove() {
        if (this.left < -this.width) {
            //移除dom
            this.dom.remove();
        }
    }
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class PipePair {
    constructor(speed) {
        this.spaceHeight = 150; //空隙位置的高度
        this.minHeight = 80;
        this.maxHeight = landTop - this.minHeight - this.spaceHeight;
        const upHeight = getRandom(this.minHeight, this.maxHeight);
        const upDom = document.createElement("div");
        upDom.className = "pipe up";
        this.upPipe = new Pipe(upHeight, 0, speed, upDom);

        const downHeight = landTop - upHeight - this.spaceHeight;
        const downTop = landTop - downHeight;
        const downDom = document.createElement("div");
        this.downPipe = new Pipe(downHeight, downTop, speed, downDom);
        downDom.className = "pipe down";

        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }

    get useLess(){
        return this.upPipe.left < -this.upPipe.width;
    }



    move(duration){
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}





class PipePareProduce {
    constructor(speed) {
        this.speed = speed;
        this.pairs = [];
        this.timer = null;
        this.tick = 1500;
    }
    startProduce() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.pairs.push(new PipePair(this.speed));
            //移除用不到的柱子
            for(let i = 0;i<this.pairs.length;i++){
                var pair = this.pairs[i];
                if(pair.useLess){
                    this.pairs.splice(i,1);
                    i--;
                }
            }
        }, this.tick);
    }
    stopProduce() {
        clearInterval(this.timer);
        this.timer = null;
    }
}





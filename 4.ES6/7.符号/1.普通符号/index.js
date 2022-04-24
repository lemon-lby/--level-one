function createHero() {
    const gongji = Symbol();
    const hero = {
        attack: 30,
        hp: 100,
        defence: 10,
        [gongji]() {
            console.log(this.attack);
        }
    }
    return hero;
}

const h = createHero();
console.log(h);
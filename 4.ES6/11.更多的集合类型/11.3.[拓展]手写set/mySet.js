class mySet {
    constructor(iterator = []) {
        if (typeof iterator[Symbol.iterator] !== "function") {
            throw new TypeError("不是可迭代的对象");
        }
        this._datas = [];
        for (const item of iterator) {
            this.add(item);
        }
    }


    add(data) {
        if (!this.has(data)) {
            this._datas.push[data];
        }
    }


    has(data) {
        for (const item of this._datas) {
            if (this.isEqual(data, item)) {
                return true;
            }
        }
        return false;
    }


    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true;
        }
        return Object.is(data1, data2);


    }

    forEach(callback) {
        for (const item of this._datas) {
            callback(item, item, this)
        }
    }


    delete(data) {
        for (let i = 0; i < this._datas.length; i++) {
            const element = this._datas[i];
            if (this.isEqual(element, data)) {
                this._datas.splice(i, 1);
            }
        }
    }

    *[Symbol.iterator]() {
        for (const item of this._datas) {
            yield item;

        }
    }

}
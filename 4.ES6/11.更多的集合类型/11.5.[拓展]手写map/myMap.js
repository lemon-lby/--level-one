class myMap {
    constructor(iterable = []) {
        if (typeof iterable[Symbol.iterator] !== "function") {
            throw new TypeError("不是可迭代的对象");
        }
        this._datas = [];
        for (const item of iterable) {
            if (typeof item[Symbol.iterator] !== "function") {
                throw new TypeError("不是可迭代的对象");
            }
            const iterator = item[Symbol.iterator]();
            const key = iterator.next().value;
            const value = iterator.next().value;
            this.set(key, value);
        }
    }



    set(key, value) {
        const obj = this._getObj(key);
        if (obj) {
            //修改
            obj.value = value;
        } else {
            this._datas.push({
                key,
                value
            })
        }
    }

    /**
     * 根据key值在内部数组中，找到对应的数据项
     * @param {*} key 
     */
    _getObj(key) {
        for (const item of this._datas) {
            if (this.isEqual(item.key, key)) {
                return item;
            }
        }
    }


    has(key) {
        const item = this._getObj(key);
        return item !== undefined;
    }

    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true;
        }
        return Object.is(data1, data2);
    }



    get(key) {
        const obj = this._getObj(key);
        if (obj) {
            return obj.value;
        }
        return undefined;
    }



    get size() {
        return this._datas.length;
    }


    delete(key) {
        for (let i = 0; i < this._datas.length; i++) {
            const element = this._datas[i];
            if (this.isEqual(element.key, key)) {
                this._datas.splice(i, 1);
                return true;
            }

        }
        return false;
    }


    clear() {
        this._datas.length = 0;
    }



    *[Symbol.iterator](){
        for (const item of this._datas) {
            yield [item.key,item.value];
        }
    }



    forEach(callback){
        for (const item of this._datas) {
            callback(item.value,item.key,item);
        }
    }
}
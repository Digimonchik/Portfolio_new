import {makeAutoObservable} from "mobx";


export default class Store {
    counter = 0

    constructor() {
        makeAutoObservable(this);
    }
    increase() {
        this.counter = this.counter + 1
        return this.counter
    }
    decrease() {
        this.counter = this.counter - 1
        return this.counter
    }
    getCurrent() { 
        return this.counter
    }
}
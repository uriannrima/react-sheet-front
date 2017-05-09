import { observable, action } from "mobx";

export class Classe {
    @observable name: string;
    @observable level: number;
    @observable hitDice: string;

    constructor(className: string, level?: number) {
        this.name = className;
        this.level = level || 1;
    }
}
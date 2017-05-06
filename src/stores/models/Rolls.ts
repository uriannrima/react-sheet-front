import { observable, action } from "mobx";

export class SaveRolls {
    @observable fortitude: number;
    @observable reflex: number;
    @observable will: number;

    constructor({ fort = 1, ref = 1, will = 1 }) {
        this.fortitude = fort;
        this.reflex = ref;
        this.will = will;
    }
}

export class AttackRolls {
    @observable roll: string;
    constructor({ roll }) {
        this.roll = roll;
    }
}
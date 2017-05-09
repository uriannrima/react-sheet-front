import { observable, action } from "mobx";
import * as Utils from "utils";
import { Classe, AttackRolls, SaveRolls } from "models";

export class Status {
    @observable healthPoints: number;
    @observable armorClass: number;

    constructor({ hp = 1, ac = 10 }) {
        this.healthPoints = hp;
        this.armorClass = ac;
    }
}

export class Character {
    @observable id: string;
    @observable name: string;
    @observable classe: Classe;
    @observable status: Status;
    @observable saveRolls: SaveRolls;
    @observable attackRolls: AttackRolls;

    constructor(name?: string, classe?: Classe, status?: Status, saveRolls?: SaveRolls, attackRolls?: AttackRolls) {
        this.name = name || "";
        this.classe = classe || new Classe("Warrior");
        this.status = status || new Status({});
        this.saveRolls = saveRolls || new SaveRolls({});
        this.attackRolls = attackRolls || new AttackRolls({ roll: "1d10+2" });
    }

    update(payload: any) {
        for (const property in this) {
            if (typeof payload[property] !== 'undefined') {
                this[property] = payload[property];
            }
        }
    }
}
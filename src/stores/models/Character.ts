import { observable, action } from "mobx";
import * as Utils from "utils";
import { Classe, AttackRolls, SaveRolls, RogueClass, WarriorClass } from "./";

export class Status {
    @observable healthPoints: number;
    @observable armorClass: number;

    constructor({ hp = 1, ac = 10 }) {
        this.healthPoints = hp;
        this.armorClass = ac;
    }
}

export class Character {
    @observable id;
    @observable name: string;
    @observable classe: Classe;
    @observable status: Status;
    @observable saveRolls: SaveRolls;
    @observable attackRolls: AttackRolls;

    constructor(name: string, classe?: Classe, status?: Status, saveRolls?: SaveRolls, attackRolls?: AttackRolls) {
        this.id = Utils.generateGuid();
        this.name = name;
        this.classe = classe || new WarriorClass();
        this.status = status || new Status({});
        this.saveRolls = saveRolls || new SaveRolls({});
        this.attackRolls = attackRolls || new AttackRolls({ roll: "1d10+2" });
    }

    @action changeClass(className: string) {
        this.classe.changeName(className);
    }
}
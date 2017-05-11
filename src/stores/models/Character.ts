import { observable, action } from "mobx";
import { serializable } from "utils";

@serializable
export class Status {
    @observable healthPoints: number = 10;
    @observable armorClass: number = 10;
}

@serializable
export class SaveRolls {
    @observable fortitude: number = 0;
    @observable reflex: number = 0;
    @observable will: number = 0;
}

@serializable
export class AttackRolls {
    @observable roll: string = "1d5+1";
}

@serializable
export class Classe {
    @observable name: string = "Warrior";
    @observable level: number = 1;
    @observable hitDice: string = "d10";
}

@serializable
export class Character {
    @observable id: string;
    @observable name: string;
    @observable playerName: string;
    @observable classe: Classe;
    @observable status: Status;
    @observable saveRolls: SaveRolls;
    @observable attackRolls: AttackRolls;

    constructor(id: string, name?: string, playerName?: string, classe?: Classe, status?: Status, saveRolls?: SaveRolls, attackRolls?: AttackRolls) {
        this.id = id;
        this.name = name;
        this.playerName = playerName;
        this.classe = classe || new Classe();
        this.status = status || new Status();
        this.saveRolls = saveRolls || new SaveRolls();
        this.attackRolls = attackRolls || new AttackRolls();
    }
}
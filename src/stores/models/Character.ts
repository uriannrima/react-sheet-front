import { observable, action } from "mobx";
import { JsonProperty } from 'json-object-mapper';
import { generateGuid } from "utils";
import { serializable } from "models";

export class Status {
    @observable healthPoints: number;
    @observable armorClass: number;
}

export class SaveRolls {
    @observable fortitude: number;
    @observable reflex: number;
    @observable will: number;
}

export class AttackRolls {
    @observable roll: string;
}

export class Classe {
    @observable name: string;
    @observable level: number;
    @observable hitDice: string;
}

@serializable
export class Character {
    @observable id: string;
    @observable name: string;
    @observable classe: Classe;
    @observable status: Status;
    @observable saveRolls: SaveRolls;
    @observable attackRolls: AttackRolls;

    // update(payload: any) {
    //     for (const property in this) {
    //         if (typeof payload[property] !== 'undefined') {
    //             this[property] = payload[property];
    //         }
    //     }
    // }
}
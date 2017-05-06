import { observable, computed, autorun, action } from "mobx";
import * as Utils from "utils";

class Status {
    @observable healthPoints: number;
    @observable armorClass: number;

    constructor({ hp = 1, ac = 10 }) {
        this.healthPoints = hp;
        this.armorClass = ac;
    }
}

class SaveRolls {
    @observable fortitude: number;
    @observable reflex: number;
    @observable will: number;

    constructor({ fort = 1, ref = 1, will = 1 }) {
        this.fortitude = fort;
        this.reflex = ref;
        this.will = will;
    }
}

class AttackRolls {
    @observable roll: string;
    constructor({ roll }) {
        this.roll = roll;
    }
}

class Weapon {
    @observable damage: string;
    @observable hitRoll: number;
}

class CharacterClass {
    @observable name: string;
    @observable level: number;
    @observable hitDice: string;

    constructor(className: string, level?: number) {
        this.name = className;
        this.level = level || 1;
    }

    @action changeName(name: string) {
        this.name = name;
    }

    @action changeLevel(level: number) {
        this.level = level;
    }
}

class WarriorClass extends CharacterClass {
    constructor(level?: number) {
        super("Warrior", level);
        this.hitDice = "d10";
    }
}

class RogueClass extends CharacterClass {
    constructor(level?: number) {
        super("Rogue", level);
        this.hitDice = "d6";
    }
}

class Character {
    @observable id;
    @observable name: string;
    @observable charClass: CharacterClass;
    @observable status: Status;
    @observable saveRolls: SaveRolls;
    @observable attackRolls: AttackRolls;

    constructor(name: string, characterClass?: CharacterClass, status?: Status, saveRolls?: SaveRolls, attackRolls?: AttackRolls) {
        this.id = Utils.generateGuid();
        this.name = name;
        this.charClass = characterClass || new WarriorClass();
        this.status = status || new Status({});
        this.saveRolls = saveRolls || new SaveRolls({});
        this.attackRolls = attackRolls || new AttackRolls({ roll: "1d10+2" });
    }

    @action changeClass(className: string) {
        this.charClass.changeName(className);
    }
}

class CharactersStore {
    @observable characters = [
        new Character("Naevys", new RogueClass(2)),
        new Character("Buck"),
        new Character("Shakyra", new CharacterClass("Ranger", 2)),
        new Character("Darthus", new CharacterClass("Paladin", 2)),
    ];

    @observable filter: string = "";

    @computed get getAll(): Character[] {
        return this.characters;
    }
}

var charactersStore = (<any>window).charactersStoreDebug = new CharactersStore;
export default charactersStore;
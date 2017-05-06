import { observable, action } from "mobx";

export class Classe {
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

export class WarriorClass extends Classe {
    constructor(level?: number) {
        super("Warrior", level);
        this.hitDice = "d10";
    }
}

export class RogueClass extends Classe {
    constructor(level?: number) {
        super("Rogue", level);
        this.hitDice = "d6";
    }
}
import { observable, computed, action } from "mobx";
import * as Utils from "utils";
import * as Models from "./models";

class CharacterFilter {
    @observable byName: string = '';
    @observable byClass: string = '';
    @observable byLevel: number = 0;
}

class CharactersStore {
    @observable characters: Models.Character[] = [
        new Models.Character("Naevys", new Models.RogueClass(2)),
        new Models.Character("Buck"),
        new Models.Character("Shakyra", new Models.Classe("Ranger", 2)),
        new Models.Character("Darthus", new Models.Classe("Paladin", 3)),
        new Models.Character("Kossuth", new Models.Classe("Paladin", 1)),
        new Models.Character("Riley", new Models.Classe("Beguiler", 2)),
    ];

    @observable filter: CharacterFilter = new CharacterFilter;

    @computed get getAll(): Models.Character[] {
        return this.characters;
    }

    @computed get getFiltered(): Models.Character[] {
        const { byName, byClass, byLevel } = this.filter;
        return this.characters.filter((character) => {
            if (byName && !new RegExp(byName, "i").test(character.name)) return;
            if (byClass && !new RegExp(byClass, "i").test(character.classe.name)) return;
            if (byLevel && character.classe.level <= byLevel) return;

            return character;
        });
    }

    @action createCharacter(name: string) {
        this.characters.push(new Models.Character(name));
    }

    @action deleteCharacter(id: string) {
        (<any>this.characters).replace(this.characters.filter((character) => {
            return character.id !== id;
        }));
    }
}

var charactersStore = (<any>window).charactersStoreDebug = new CharactersStore;
export default charactersStore;
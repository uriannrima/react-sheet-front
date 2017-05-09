import { observable, computed, action, createTransformer, transaction, toJS } from "mobx";
import * as Utils from "utils";
import * as Models from "models";

class CharacterFilter {
    @observable byName: string = '';
    @observable byClass: string = '';
    @observable byLevel: number = 0;
}

class CharactersStore {
    @observable characters: Models.Character[] = [];

    constructor() {
        this.saveOrUpdate(new Models.Character("Naevys", new Models.Classe("Rogue", 2)));
        this.saveOrUpdate(new Models.Character("Buck"));
        this.saveOrUpdate(new Models.Character("Shakyra", new Models.Classe("Ranger", 2)));
        this.saveOrUpdate(new Models.Character("Darthus", new Models.Classe("Paladin", 3)));
        this.saveOrUpdate(new Models.Character("Kossuth", new Models.Classe("Paladin", 1)));
        this.saveOrUpdate(new Models.Character("Riley", new Models.Classe("Beguiler", 2)));
    }

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

    public getById = createTransformer((id: string) => {
        return toJS(this.characters.find(c => c.id === id));
    });

    @action delete(id: string) {
        (<any>this.characters).replace(this.characters.filter((character) => {
            return character.id !== id;
        }));
    }

    @action saveOrUpdate(character: any) {
        const storeCharacter = this.characters.find((storeCharacter) => storeCharacter.id == character.id);
        if (storeCharacter) {
            storeCharacter.update(character);
        } else {
            const newCharacter = new Models.Character();
            newCharacter.id = Utils.generateGuid();
            newCharacter.update(character);
            this.characters.push(newCharacter);
        }
    }
}

var charactersStore = (<any>window).charactersStoreDebug = new CharactersStore;
export default charactersStore;
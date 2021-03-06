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

    @observable filter: CharacterFilter = new CharacterFilter;

    constructor() {
        this.characters.push(new Models.Character("123456", "Shakira"));
    }

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

    public getById = createTransformer((id: string, asViewObject: boolean = true) => {
        const character = this.characters.find(c => c.id === id);
        return asViewObject ? toJS(character) : character;
    });

    @action delete(id: string) {
        (<any>this.characters).replace(this.characters.filter((character) => {
            return character.id !== id;
        }));
    }

    @action saveOrUpdate(character: any) {
        const newCharacter = Utils.deserialize(character);
        console.log(newCharacter);

        // Use "map" like "select" from LINQ.
        const index = this.characters.map(storeCharacter => storeCharacter.id).indexOf(character.id);
        if (index >= 0) {
            this.characters[index] = newCharacter;
        } else {
            newCharacter.id = Utils.generateGuid();
            this.characters.push(newCharacter);
        }
    }
}

var charactersStore = (<any>window).charactersStoreDebug = new CharactersStore;
export default charactersStore;
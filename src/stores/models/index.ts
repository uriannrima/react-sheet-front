export { Character, Classe, AttackRolls, SaveRolls } from "./Character";

export function serializable<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        __typeName__ = constructor.name;
    }
}

export function deserialize<T>(data: any): T {
    var instance = new data[data.__type__]();
    return instance as T;
}
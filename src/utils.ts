import * as Models from "models";

// Generate guid for us...
export function generateGuid() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export function Serializable<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class Serializable extends constructor {
        __type__ = constructor.name;
    }
}

export function deserialize(data: any) {
    try {
        var instance = new Models[data.__type__]();
        for (const key in data) {
            if (typeof data[key] === 'object' && data[key].__type__) {
                instance[key] = deserialize(data[key]);
            } else {
                instance[key] = data[key];
            }
        }
        return instance;
    } catch (e) {
        console.log(e);
        return null;
    }
}
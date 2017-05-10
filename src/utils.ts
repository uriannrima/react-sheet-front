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

export function serializable<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        __typeName__ = constructor.name;
    }
}

export function deserialize<T>(data: any): T {
    var instance = new data[data.__type__]();
    return instance as T;
}
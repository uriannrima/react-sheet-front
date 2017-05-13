import { changePropertyRecursively } from "./changePropertyRecursively";

function createObjectHandler(target, path, options) {
    return (event) => {
        if (options && options.onChangeBegin) options.onChangeBegin(event);

        const element = event.target;
        const value = element.type === 'checkbox' ? element.checked : element.value;
        const walk = path.split('.');
        const key = walk.shift();
        if (walk.length == 0) {
            target[key] = value;
        } else {
            const mainObject = target[key];
            changePropertyRecursively(mainObject, walk, value);
            target[key] = mainObject;
        }

        if (options && options.onChangeFinish) options.onChangeFinish(event);
    };
}

export function linkObject(target, path, options) {
    if (path) {
        return createObjectHandler(target, path, options);
    }

    const cache = target.__linkStateHandlers || (target.__linkStateHandlers = {});

    return cache[key] || (cache[key] = createObjectHandler(target, key));
}
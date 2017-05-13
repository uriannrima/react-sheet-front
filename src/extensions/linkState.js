function changePropertyRecursively(actualObject, walk, value) {
    if (typeof walk === 'object' && walk.length > 1) {
        const nextObject = actualObject[walk.shift()];
        changePropertyRecursively(nextObject, walk, value);
    } else {
        const key = typeof walk === 'object' ? walk.shift() : walk;
        actualObject[key] = value;
    }
}

function createHandler(target, path, options) {
    return (event) => {
        if (options && options.onChangeBegin) options.onChangeBegin(event);

        const element = event.target;
        const value = element.type === 'checkbox' ? element.checked : element.value;
        const walk = path.split('.');
        const key = walk.shift();
        if (walk.length == 0) {
            target.state ? target.setState({ [key]: value }) : target[key] = value;
        } else {
            const mainObject = target.state ? target.state[key] : target[key];
            changePropertyRecursively(mainObject, walk, value);
            target.state ? target.setState({ [key]: mainObject }) : target[key] = mainObject;
        }

        if (options && options.onChangeFinish) options.onChangeFinish(event);
    };
}

export function linkState(target, path, options) {
    if (path) {
        return createHandler(target, path, options);
    }

    const cache = target.__linkStateHandlers || (target.__linkStateHandlers = {});

    return cache[key] || (cache[key] = createHandler(target, key));
};
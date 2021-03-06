import { changePropertyRecursively } from "./changePropertyRecursively";

function createComponentHandler(target, path, options) {
    return (event) => {
        if (options && options.onChangeBegin) options.onChangeBegin(event);

        const element = event.target;
        const value = element.type === 'checkbox' ? element.checked : element.value;
        const walk = path.split('.');
        const key = walk.shift();
        if (walk.length == 0) {
           target.setState({ [key]: value });
        } else {
            const mainObject = target.state[key];
            changePropertyRecursively(mainObject, walk, value);
            target.setState({ [key]: mainObject });
        }

        if (options && options.onChangeFinish) options.onChangeFinish(event);
    };
}

export function linkState(component, path, options) {
    if (path) {
        return createComponentHandler(component, path, options);
    }

    const cache = component.__linkStateHandlers || (component.__linkStateHandlers = {});

    return cache[key] || (cache[key] = createComponentHandler(component, key));
};
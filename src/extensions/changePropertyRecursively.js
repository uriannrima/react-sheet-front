export function changePropertyRecursively(actualObject, walk, value) {
    if (typeof walk === 'object' && walk.length > 1) {
        const nextObject = actualObject[walk.shift()];
        changePropertyRecursively(nextObject, walk, value);
    } else {
        const key = typeof walk === 'object' ? walk.shift() : walk;
        actualObject[key] = value;
    }
}
export const uniqueObjects = (arr) => {
    let copy = [...arr];
    const unique = [...copy].filter((obj, index, arr) => {
        return index === arr.findIndex((t) => (
            t.id === obj.id
        ));
    });

    return unique
}
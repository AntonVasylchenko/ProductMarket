export const getTotalPrice = (arr) => {
    let copy = [...arr]
    let result = [];
    let total = 0;
    for (let items of copy) {
        for (let [key, value] of Object.entries(items)) {
            if (key === "total") {
                result.push(value);
            } else if (key === "price") {
                result.push(1 * Number(value))
            }
        }
    };

    for (let elem of result) {
        total += elem
    }
    return total
}
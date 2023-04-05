export const getCategories = (arr) => {
    let cate = [];
    let result = [];
    for (let items of arr) {
        for (let [key, value] of Object.entries(items)) {
            if (key === "category") {
                cate.push(value);
            }
        }
    };
    for(let i = 0; i < cate.length; i++) {
        if (cate[i] !== cate[i + 1]) {
            result.push(cate[i]);
        }
    }
    return result;
}
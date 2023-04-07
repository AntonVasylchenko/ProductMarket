export const productFilter = (arr, cate) => {
    let result = arr.filter(el => el.category === cate);
    if (result.length > 0) {
        return result
    } else {
        return arr
    }
}
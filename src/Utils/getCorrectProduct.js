export const productFilter = (arr, cate) => {
    return arr.filter(el => el.category === cate);
}
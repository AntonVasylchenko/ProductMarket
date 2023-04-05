export const getPriceOrigin = (price, discount) => {
    let originPrice = 0
    if (Number(discount) !== 0) {
        originPrice = Number(price) + ((Number(price) * Number(discount)) / 100);
        return [price, Math.floor(originPrice)]
    }
    return [price, originPrice]

}
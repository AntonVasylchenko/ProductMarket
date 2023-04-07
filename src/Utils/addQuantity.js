export const addQuantity = (id, arr, flag) => {
    let copy = [...arr].filter(elem => {
        if (elem.id === id) {
            if (!elem.quantity) {
                elem.quantity = 1;
            }
            if (flag) {
                elem.quantity += 1
                elem.stock -= 1 
            } else {
                elem.quantity -= 1
                elem.stock += 1 
            }
            elem.total = elem.quantity * elem.price
        }
        return elem
    });
    return copy
}
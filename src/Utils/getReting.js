export const getRating = (number) => {
    let per = (100 * number) / 5;
    return Math.floor(per);
}
import { useMemo } from "react"

export const useSorterdProduct = (products, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...products].sort((a, b) => { return a[sort] - b[sort] })
        } else {
            return products
        }
    }, [sort, products]);

    return sortedPost
}


export const useProduct = (products, sort, query) => {
    const sortedPost = useSorterdProduct(products, sort)
    const sortedAndSerchedproducts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

    }, [query, sortedPost]);
    return sortedAndSerchedproducts
}
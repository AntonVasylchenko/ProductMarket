import axios from "axios";

export default class MarketServise {
    static async getMarket () {
        const response = await axios.get(`https://dummyjson.com/products?skip=0&limit=100`)
        return response;
    }
}
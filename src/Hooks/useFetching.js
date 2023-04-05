import { useState } from "react";

export const useFetching = (callback) => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    const fetching = async () => {
        try {
            setLoad(true);
            await callback()
        } catch (error) {
            setError(error.massage)
        } finally {
            setLoad(false);
        }
    }
    return [fetching, load, error]

}

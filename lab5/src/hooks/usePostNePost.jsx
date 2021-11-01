import { useContext } from "react";
import { ApiContext } from "../contexts";

export const usePostNePost = () => {
    const apiContext = useContext(ApiContext);
    return async (body) => {
        const { data } = await apiContext.post("/posts",body);
        return data;
    };
};

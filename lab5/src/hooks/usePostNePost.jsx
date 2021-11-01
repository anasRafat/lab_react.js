import { useContext } from "react";
import { ApiContext } from "../contexts";

export const usePostNePost = () => {
    const apiContext = useContext(ApiContext);
    return async (body) => {
        return await apiContext.post("/posts",body);
    };
};

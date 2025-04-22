import { api } from "../configs/axiosConfig";

export const joinApi = async (joinInfo) => {
    return await api.post("/api/account/join", joinInfo);
}

export const loginApi = async (loginInfo) => {
    return await api.post("/api/account/login", loginInfo);
}
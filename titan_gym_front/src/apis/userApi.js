import { api } from "../configs/axiosConfig";

export const getUserMyApi = async () => await api.get("/api/user/my");


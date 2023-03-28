import ApiConfig from "../../service/ApiConfig";
import httpService from "../../service/HttpService";
import { IUSer, IUserForm } from "./User.type";

export const getUserList = async () => {
  return await httpService.get<IUSer[]>(ApiConfig.user);
};

export const createUser = async (data: IUserForm) => {
  return await httpService.post<IUSer>(ApiConfig.user, data);
};

export const deleteUserApi = async (id: number) => {
  const url = `${ApiConfig.user}/${id}`;
  return await httpService.delete(url);
};

export const updateUserApi = async (id: number, data: IUserForm) => {
  const url = `${ApiConfig.user}/${id}`;
  return await httpService.put(url, data);
};

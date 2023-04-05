import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiConfig from "../../service/ApiConfig";
import httpService from "../../service/HttpService";
import { IUSer, IUserForm } from "./User.type";

export const getUserList = async () => {
  return await httpService.get<IUSer[]>(ApiConfig.user);
};

export const createUser = async (data: IUserForm) => {
  // const sData = { ...ApiConfig.user, data };
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
  };
  return await httpService.post<IUSer>(ApiConfig.user, data, {
    headers: headers,
  });
};

export const deleteUserApi = async (id: number) => {
  const url = `${ApiConfig.user}/${id}, {
    method: "DELETE",
  }`;
  return await httpService.delete(url);
};

export const updateUserApi = async (user: any) => {
  const url = `${ApiConfig.user}/${user.id}`;
  return await httpService.put(url, user);
};
